import pywhatkit
import time
import os

# --- Configuration ---
PHONE_NUMBER = "+916305665343"  # The updated test number
SCHEDULE_PATH = r"C:\Users\Acer\Downloads\PROGRAM SCHEDULE 2 pages.pdf"
WAIT_TIME_SECONDS = 20  # Time to wait for WhatsApp Web to load

# --- Formatted Message ---
MESSAGE = """🚀 *SIGMOID 2K26: THE COUNTDOWN BEGINS!* 🚀

Hey there, Participant! 🥳

We are absolutely *thrilled* to have you joining us for the most exciting technical fest of the year! Your presence is going to make Sigmoid 2K26 truly legendary. Get ready for a day packed with innovation, competition, and pure adrenaline! ⚡

Click here to see the Sigmoid 2K26 schedule: https://raw.githubusercontent.com/saicharankatpadi/Sigmoid2K26/main/public/PROGRAM-SCHEDULE.pdf

📍 *Location:* Sri Venkateshwara University, Tirupati
📅 *Date:* April 3rd, 4th 2026

See you on the ground! Let's make history together! 🎓✨

#Sigmoid2K26 #InnovationUnleashed #TechFest"""

def send_whatsapp_reminder():
    if not os.path.exists(SCHEDULE_PATH):
        print(f"❌ Error: File not found at {SCHEDULE_PATH}")
        return

    try:
        print(f"DEBUG: Preparing to send reminder to {PHONE_NUMBER}...")
        
        # Send the Text Message with the Link
        # This opens the browser, waits, types the message, and sends it.
        pywhatkit.sendwhatmsg_instantly(
            phone_no=PHONE_NUMBER, 
            message=MESSAGE, 
            wait_time=WAIT_TIME_SECONDS, 
            tab_close=False
        )
        print("LOG: Text message sent successfully!")
        print("\nFINISH: Process complete! Check your browser to ensure everything was sent correctly.")
        print("TIP: Make sure your website is updated with the PDF for the link to work.")

    except Exception as e:
        print(f"ERROR: An error occurred: {e}")

if __name__ == "__main__":
    send_whatsapp_reminder()
