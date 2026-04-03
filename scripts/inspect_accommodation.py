import pandas as pd
import os
import re
import sys

# Set encoding to UTF-8 for Windows terminal
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

# --- Configuration ---
FILE_PATH = r"C:\Users\Acer\Downloads\sigmoid_2k26_accommodation_final.xlsx"

def inspect_accommodation_data():
    if not os.path.exists(FILE_PATH):
        print(f"ERROR: File not found at {FILE_PATH}")
        return

    try:
        # Load raw to find header
        df_raw = pd.read_excel(FILE_PATH, header=None)
        
        # Find header row
        header_row_idx = 0
        for idx, row in df_raw.iterrows():
            row_str = " ".join(row.astype(str).values).lower()
            if 'phone' in row_str or 'email' in row_str or 'contact' in row_str:
                header_row_idx = idx
                break
        
        df = pd.read_excel(FILE_PATH, header=header_row_idx)
        print(f"LOG: Header found at row {header_row_idx}")
        print("\n--- COLUMNS ---")
        for i, col in enumerate(df.columns):
            print(f"{i}. {col}")
        
        print("\n--- SAMPLE DATA (First 3 rows) ---")
        print(df.head(3))

    except Exception as e:
        print(f"ERROR: {e}")

if __name__ == "__main__":
    inspect_accommodation_data()
