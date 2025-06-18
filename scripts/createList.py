import os
import json

image_directory = "images"
output_file = "filenames.js"

images = [
    os.path.join(image_directory, f).replace("\\", "/")
    for f in os.listdir(image_directory)
    if f.lower().endswith((".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"))
]

with open(output_file, "w") as f:
    f.write("const images = " + json.dumps(images, indent=2) + ";")

print(f"generated {output_file} with {len(images)} entries.")