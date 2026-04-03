import pandas as pd
import os
import re
import sys

# Set encoding to UTF-8 for Windows terminal
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

# --- Configuration ---
FILE_PATH = r"C:\Users\Acer\Downloads\SIGMOID Combo Pack (Responses).xlsx"

def extract_combo_data():
    if not os.path.exists(FILE_PATH):
        print(f"ERROR: File not found at {FILE_PATH}")
        return

    try:
        # Load the Excel file. We'll search for the header row first.
        df_raw = pd.read_excel(FILE_PATH, header=None)
        
        # Find the header row (first row with 'phone' or 'number')
        header_row_idx = 0
        for idx, row in df_raw.iterrows():
            row_str = " ".join(row.astype(str).values).lower()
            if 'phone' in row_str or 'number' in row_str:
                header_row_idx = idx
                break
        
        # Reload with identified header
        df = pd.read_excel(FILE_PATH, header=header_row_idx)
        print(f"LOG: Successfully loaded Combo Pack Excel from row {header_row_idx}.")
        
        # Identify columns that look like phone numbers
        phone_cols = [col for col in df.columns if any(p in str(col).lower() for p in ['phone', 'mobile', 'contact', 'number'])]
        
        if not phone_cols:
            print("ERROR: Could not find any phone columns. Columns found:")
            print(df.columns.tolist())
            return
        
        # Print column names for debugging
        print("\n--- ALL COLUMNS ---")
        for i, col in enumerate(df.columns):
            print(f"{i}. {col}")

        print(f"\nLOG: Found {len(phone_cols)} potential phone columns.")

        all_entries = []
        found_numbers = set()
        for idx, row in df.iterrows():
            row_details = []
            for col in phone_cols:
                val = str(row[col]).strip()
                clean_val = "".join(filter(str.isdigit, val))
                matches = re.findall(r'[6789]\d{9}', clean_val)
                for m in matches:
                    row_details.append({"col": col, "num": m})
                    found_numbers.add(m)
            all_entries.append({"row": idx + header_row_idx + 2, "details": row_details})

        print("\n--- ROW-BY-ROW EXTRACTION ---")
        for entry in all_entries:
            nums_with_cols = [f"{d['col']}: {d['num']}" for d in entry['details']]
            print(f"Row {entry['row']}: {nums_with_cols}")
        
        sorted_numbers = sorted(list(found_numbers))

        print("\n--- COMBO PACK PARTICIPANT NUMBERS ---")
        for i, num in enumerate(sorted_numbers, 1):
            print(f"{i}. {num}")
        print("--------------------------------------")
        print(f"\nLOG: Total unique phone numbers found: {len(sorted_numbers)}")

    except Exception as e:
        print(f"ERROR: An error occurred: {str(e)}")

if __name__ == "__main__":
    extract_combo_data()
