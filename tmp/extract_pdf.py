import fitz  # PyMuPDF
import os

pdf_path = r"C:\Users\Acer\Downloads\DOC-20240420-WA0002..pdf"
output_dir = r"c:\Users\Acer\Desktop\sigmoid\public\assets\magazine"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

doc = fitz.open(pdf_path)
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=150)
    output_path = os.path.join(output_dir, f"page_{i+1}.png")
    pix.save(output_path)
    print(f"Saved: {output_path}")

doc.close()
