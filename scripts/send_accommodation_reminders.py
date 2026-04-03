import pandas as pd
import pywhatkit
import time
import os
import re
import sys

# Set encoding to UTF-8 for Windows terminal
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

# --- Configuration ---
EXCEL_PATH = r"C:\Users\Acer\Downloads\sigmoid_2k26_accommodation_final.xlsx"
WAIT_TIME = 20           # Seconds for WhatsApp Web to load
INTER_MESSAGE_DELAY = 10 # Seconds between closing one tab and starting next

# --- Message Template ---
def get_message(name, sid):
    return f"""🏨 *Sigmoid 2K26: Your Roadmap & Accommodation Guide!* 🏨

Hey {name}! 👋

We've got your accommodation confirmed (ID: {sid}) and we're so ready to welcome you to Sigmoid 2K26! To make your arrival as smooth as possible, we've prepared a special **SIGMOID PASSPORT & ROADMAP** 📂.

This guide includes:
📍 Navigation to your stay
🏢 Check-in procedures
🗺️ Event venue roadmap
✨ Key contact details

Click here to view/download your Sigmoid Roadmap: https://raw.githubusercontent.com/saicharankatpadi/Sigmoid2K26/main/public/SIGMOID-PASSPORT.pdf

Safe travels, and see you soon! 🎓✨

#Sigmoid2K26 #AccommodationGuide #InnovateTogether"""

def send_accommodation_reminders():
    if not os.path.exists(EXCEL_PATH):
        print(f"ERROR: File not found at {EXCEL_PATH}")
        return

    try:
        # Load the Excel file. Header is at row 1.
        df = pd.read_excel(EXCEL_PATH, header=1)
        print(f"LOG: Loaded {len(df)} accommodation contacts.")

        # Identify columns
        name_col = 'Full Name'
        sid_col = 'Sigmoid ID'
        phone_col = 'Phone No.'

        results = []
        for idx, row in df.iterrows():
            name = str(row[name_col]).strip() if name_col in df.columns else "Participant"
            sid = str(row[sid_col]).strip() if sid_col in df.columns else "N/A"
            phone = str(row[phone_col]).strip() if phone_col in df.columns else ""
            
            # Clean phone: only digits
            clean_phone = "".join(filter(str.isdigit, phone))
            phone_match = re.search(r'[6789]\d{9}', clean_phone)
            
            if not phone_match:
                print(f"[{idx+1}] Skipping {name} - No valid phone number.")
                continue

            target_number = f"+91{phone_match.group()}"
            msg = get_message(name, sid)
            
            print(f"[{idx+1}/{len(df)}] Sending to {name} ({target_number})...", end=" ", flush=True)

            try:
                pywhatkit.sendwhatmsg_instantly(
                    phone_no=target_number,
                    message=msg,
                    wait_time=WAIT_TIME,
                    tab_close=True,
                    close_time=3
                )
                print("OK ✅")
                time.sleep(INTER_MESSAGE_DELAY)
            except Exception as e:
                print(f"FAILED ❌ ({e})")

    except Exception as e:
        print(f"FATAL ERROR: {e}")

if __name__ == "__main__":
    send_accommodation_reminders()
