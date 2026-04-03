import pandas as pd
import os
import re
import sys

# Set encoding to UTF-8 for Windows terminal
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

# --- Configuration ---
FILE_PATH = r"C:\Users\Acer\Downloads\sigmoid_prime_pass_2k26_final.xlsx"

def extract_numbers():
    if not os.path.exists(FILE_PATH):
        print(f"ERROR: File not found at {FILE_PATH}")
        return

    try:
        # Load the Excel file without header to be safe
        df = pd.read_excel(FILE_PATH, header=None)
        
        # Flatten all data into a single list of strings
        all_data = df.astype(str).values.flatten()
        
        # Regex for common Indian phone numbers (10 digits, optional +91)
        # Matches: 9347756948, +919347756948, 919347756948
        phone_pattern = re.compile(r'(?:\+?91)?[6789]\d{9}')
        
        found_numbers = set()
        for item in all_data:
            # Clean item: remove .0, spaces, dashes
            clean_item = item.replace('.0', '').replace(' ', '').replace('-', '')
            matches = phone_pattern.findall(clean_item)
            for m in matches:
                # Normalize to 10 digits for uniqueness check (strip +91 or 91)
                normalized = m[-10:]
                found_numbers.add(normalized)
        
        if not found_numbers:
            print("LOG: No phone numbers found using pattern matching.")
            print("LOG: Column names found:", df.iloc[0].values.tolist())
            return
        
        # Sort and format for display
        sorted_numbers = sorted(list(found_numbers))
        
        print("\n--- 10-DIGIT PARTICIPANT NUMBERS ---")
        for i, num in enumerate(sorted_numbers, 1):
            # Display exactly 10 digits as requested
            print(f"{i}. {num}")
        print("---------------------------------")
        print(f"\nLOG: Total unique numbers found: {len(sorted_numbers)}")

    except Exception as e:
        print(f"ERROR: An error occurred: {str(e)}")

if __name__ == "__main__":
    extract_numbers()
