import os
from docx2pdf import convert
from pypdf import PdfReader, PdfWriter

def convert_docx_to_pdf(docx_path, pdf_output_path):
    print(f"Converting {docx_path} to {pdf_output_path}...")
    # convert(docx_path, pdf_output_path)
    # Using subprocess to call docx2pdf if the direct import has issues on Windows
    import subprocess
    subprocess.run(["docx2pdf", docx_path, pdf_output_path], check=True)

def remove_blank_pages(pdf_path, output_path):
    print(f"Removing blank pages from {pdf_path}...")
    reader = PdfReader(pdf_path)
    writer = PdfWriter()

    for page in reader.pages:
        # Check if page has text content
        if page.extract_text().strip():
            writer.add_page(page)
    
    with open(output_path, "wb") as f:
        writer.write(f)
    print(f"Cleaned PDF saved to {output_path}")

if __name__ == "__main__":
    input_docx = r"c:\Users\Acer\Desktop\sigmoid\public\TECHNOVATE.docx"
    temp_pdf = r"c:\Users\Acer\Desktop\sigmoid\public\TECHNOVATE_temp.pdf"
    final_pdf = r"c:\Users\Acer\Desktop\sigmoid\public\TECHNOVATE.pdf"
    
    try:
        convert_docx_to_pdf(input_docx, temp_pdf)
        remove_blank_pages(temp_pdf, final_pdf)
        if os.path.exists(temp_pdf):
            os.remove(temp_pdf)
        print("Success!")
    except Exception as e:
        print(f"Error: {e}")
