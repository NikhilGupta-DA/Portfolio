import os
from PIL import Image

brain_dir = r"C:\Users\nikhi\.gemini\antigravity\brain\1b5d1d4b-b41d-4a3a-b78c-44f40d18da83"
images = [
    "media__1786130904349.png", # Spreadsheet
    "media__1786130919708.png", # Config box
    "media__1786130933823.png"  # Apps Script
]

loaded_imgs = [Image.open(os.path.join(brain_dir, img)) for img in images]

# Resize images to align perfectly in a 1200x1000 box
img1 = loaded_imgs[0].resize((1200, 500), Image.Resampling.LANCZOS)
img2 = loaded_imgs[1].resize((400, 500), Image.Resampling.LANCZOS)
img3 = loaded_imgs[2].resize((800, 500), Image.Resampling.LANCZOS)

# Create collage canvas
collage = Image.new("RGBA", (1200, 1000), (0, 0, 0, 0))

# Paste images
collage.paste(img1, (0, 0))
collage.paste(img2, (0, 500))
collage.paste(img3, (400, 500))

# Ensure public/images exists
os.makedirs(r"c:\Users\nikhi\Portfolio-Website\public\images", exist_ok=True)

output_path = r"c:\Users\nikhi\Portfolio-Website\public\images\email_collage.png"
collage.save(output_path, "PNG")
print("Collage saved successfully to:", output_path)
