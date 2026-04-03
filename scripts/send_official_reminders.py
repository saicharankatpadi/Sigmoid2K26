import pandas as pd
import pywhatkit
import time
import os
import sys

# --- Configuration ---
EXCEL_PATH = r"C:\Users\Acer\Downloads\fixed_contacts.xlsx"
SHEET_NAME = "Remaining" # Targeting the second tab
START_INDEX = 0          # First number in this tab
LENGTH = 1000            # Process all remaining numbers in this sheet
WAIT_TIME = 20           # Seconds for WhatsApp Web to load
INTER_MESSAGE_DELAY = 10 # Seconds between closing one tab and starting next

# --- Message Template ---
MESSAGE = """🚀 *SIGMOID 2K26: THE COUNTDOWN BEGINS!* 🚀

Hey there, Participant! 🥳

We are absolutely *thrilled* to have you joining us for the most exciting technical fest of the year! Your presence is going to make Sigmoid 2K26 truly legendary. Get ready for a day packed with innovation, competition, and pure adrenaline! ⚡

Click here to see the Sigmoid 2K26 schedule: https://raw.githubusercontent.com/saicharankatpadi/Sigmoid2K26/main/public/PROGRAM-SCHEDULE.pdf

📍 *Location:* Sri Venkateshwara University, Tirupati
📅 *Date:* April 3rd, 4th 2026

See you on the ground! Let's make history together! 🎓✨

#Sigmoid2K26 #InnovationUnleashed #TechFest"""

def send_batch_reminders():
    if not os.path.exists(EXCEL_PATH):
        print(f"ERROR: File not found at {EXCEL_PATH}")
        return

    try:
        # Load the Excel file from the specific sheet
        df = pd.read_excel(EXCEL_PATH, sheet_name=SHEET_NAME)
        print(f"LOG: Loaded {len(df)} contacts from Excel.")

        # Process the first 70 (or all if less than 70)
        end_index = min(START_INDEX + LENGTH, len(df))
        batch_df = df.iloc[START_INDEX:end_index]

        print(f"🚀 Starting Batch Delivery for rows {START_INDEX} to {end_index-1}...")
        print("💡 IMPORTANT: Do not move your mouse or use the keyboard while the script handles the browser.")

        for idx, row in batch_df.iterrows():
            number = str(row['contact']).strip()
            # Normalize number (add +91 if missing)
            if not number.startswith('+'):
                if not number.startswith('91'):
                    number = f"+91{number}"
                else:
                    number = f"+{number}"
            
            print(f"[{idx+1}/{end_index}] Sending to {number}...", end=" ", flush=True)

            try:
                # Send the message
                # Instantly opens browser, waits, types, and sends.
                # tab_close=True will attempt to close the tab after sending.
                pywhatkit.sendwhatmsg_instantly(
                    phone_no=number,
                    message=MESSAGE,
                    wait_time=WAIT_TIME,
                    tab_close=True,
                    close_time=3
                )
                
                # Update status in the original dataframe
                df.at[idx, 'checkstatus'] = 'OK'
                print("OK ✅")
                
                # Small delay before the next one to avoid congestion
                time.sleep(INTER_MESSAGE_DELAY)

            except Exception as e:
                print(f"FAILED ❌ ({e})")
                df.at[idx, 'checkstatus'] = f"FAILED: {e}"

        # Save the updated Excel file with status
        save_path = EXCEL_PATH.replace(".xlsx", "_updated.xlsx")
        df.to_excel(save_path, index=False)
        print(f"\n✨ Batch complete! Status saved to: {save_path}")

    except Exception as e:
        print(f"FATAL ERROR: {e}")

if __name__ == "__main__":
    send_batch_reminders()
