import os
from pypdf import PdfReader, PdfWriter

def remove_blank_pages(input_pdf, output_pdf):
    reader = PdfReader(input_pdf)
    writer = PdfWriter()
    
    removed_count = 0
    for i in range(len(reader.pages)):
        page = reader.pages[i]
        text = page.extract_text().strip()
        
        # Heuristic: if no text and no obvious content, skip
        # Note: Some blank-looking pages might have images or watermarks.
        # But usually brochure "white pages" are literally empty text boxes.
        if text:
            writer.add_page(page)
        else:
            print(f"Skipping potentially blank page: {i+1}")
            removed_count += 1
            
    with open(output_pdf, "wb") as f:
        writer.write(f)
    
    print(f"Removed {removed_count} pages.")

if __name__ == "__main__":
    input_path = r"c:\Users\Acer\Desktop\sigmoid\public\Posterize_Brochure.pdf"
    temp_path = r"c:\Users\Acer\Desktop\sigmoid\public\Posterize_Brochure_Clean.pdf"
    
    remove_blank_pages(input_path, temp_path)
    
    # Replace original with cleaned
    os.remove(input_path)
    os.rename(temp_path, input_path)
