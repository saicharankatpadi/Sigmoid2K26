import pandas as pd
import os
import re
import sys

# Set encoding to UTF-8 for Windows terminal
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

# --- Configuration ---
FILE_PATH = r"C:\Users\Acer\Downloads\sigmoid_2k26_ultimate_pass_final.xlsx"

def extract_ultimate_data():
    if not os.path.exists(FILE_PATH):
        print(f"ERROR: File not found at {FILE_PATH}")
        return

    try:
        # Load the Excel file. We'll search for the header row first.
        # Sometimes headers aren't on the first row. We'll try to find row with 'Email' or 'Phone'.
        df_raw = pd.read_excel(FILE_PATH, header=None)
        
        # Find the header row (first row with 'email' or 'phone')
        header_row_idx = 0
        for idx, row in df_raw.iterrows():
            row_str = " ".join(row.astype(str).values).lower()
            if 'phone' in row_str or 'email' in row_str or 'number' in row_str:
                header_row_idx = idx
                break
        
        # Reload with identified header
        df = pd.read_excel(FILE_PATH, header=header_row_idx)
        print(f"LOG: Successfully loaded Ultimate Pass Excel from row {header_row_idx}.")
        
        # Identify columns
        phone_cols = [col for col in df.columns if any(p in str(col).lower() for p in ['phone', 'mobile', 'contact', 'number'])]
        email_cols = [col for col in df.columns if 'email' in str(col).lower()]
        name_cols = [col for col in df.columns if 'name' in str(col).lower()]
        
        if not phone_cols and not email_cols:
            print("ERROR: Could not find Phone or Email columns. Columns found:")
            print(df.columns.tolist())
            return
        
        phone_col = phone_cols[0] if phone_cols else None
        email_col = email_cols[0] if email_cols else None
        name_col = name_cols[0] if name_cols else None
        
        print(f"LOG: Using '{phone_col}' for Phone and '{email_col}' for Email.")

        results = []
        for _, row in df.iterrows():
            name = str(row[name_col]).strip() if name_col else "Unknown"
            phone = str(row[phone_col]).strip() if phone_col else ""
            email = str(row[email_col]).strip() if email_col else ""
            
            # Clean phone: only digits
            clean_phone = "".join(filter(str.isdigit, phone))
            # Handle float .0
            if clean_phone.endswith('0') and phone.endswith('.0'):
                clean_phone = clean_phone[:-1] # Wait, this is risky. Let's just use regex for 10 digits.
            
            # Use regex for 10 digits
            phone_match = re.search(r'[6789]\d{9}', clean_phone)
            
            if phone_match:
                results.append(f"Phone: {phone_match.group()}")
            elif email and '@' in email:
                results.append(f"Email (Missing Phone): {email}")
            elif name and name != "nan":
                results.append(f"Missing Data for: {name}")

        print("\n--- ULTIMATE PASS REGISTRATIONS ---")
        for i, res in enumerate(results, 1):
            print(f"{i}. {res}")
        print("-----------------------------------")
        print(f"\nLOG: Total registrations processed: {len(results)}")

    except Exception as e:
        print(f"ERROR: An error occurred: {str(e)}")

if __name__ == "__main__":
    extract_ultimate_data()
