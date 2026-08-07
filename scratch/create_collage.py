import os
from PIL import Image

brain_dir = r"C:\Users\nikhi\.gemini\antigravity\brain\1b5d1d4b-b41d-4a3a-b78c-44f40d18da83"
images = [
    "media__1786130725561.png",
    "media__1786130753215.png",
    "media__1786130775884.png",
    "media__1786130796511.png"
]

loaded_imgs = [Image.open(os.path.join(brain_dir, img)) for img in images]

# Let's check size of the first image to maintain aspect ratio
w1, h1 = loaded_imgs[0].size
print(f"Original first image size: {w1}x{h1}")

# Resize all to a standard size keeping aspect ratio similar (e.g. width=600, height=800)
width = 600
height = int((h1 / w1) * width) if w1 > 0 else 800
print(f"Resizing all images to: {width}x{height}")

resized_imgs = [img.resize((width, height), Image.Resampling.LANCZOS) for img in loaded_imgs]

# Create a 2x2 grid collage
collage = Image.new("RGBA", (width * 2, height * 2), (0, 0, 0, 0))

# Paste images into the collage
collage.paste(resized_imgs[0], (0, 0))
collage.paste(resized_imgs[1], (width, 0))
collage.paste(resized_imgs[2], (0, height))
collage.paste(resized_imgs[3], (width, height))

# Ensure public/images directory exists
os.makedirs(r"c:\Users\nikhi\Portfolio-Website\public\images", exist_ok=True)

output_path = r"c:\Users\nikhi\Portfolio-Website\public\images\scheduler_collage.png"
collage.save(output_path, "PNG")
print("Collage saved successfully to:", output_path)
