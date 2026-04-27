from PIL import Image

def remove_background(input_path, output_path, tolerance=50):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    data = img.getdata()
    new_data = []
    
    for item in data:
        # Check if pixel is white or near-white
        # item is (R, G, B, A)
        if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
            # Change to transparent
            new_data.append((255, 255, 255, 0))
        elif item[0] < tolerance and item[1] < tolerance and item[2] < tolerance and False: # if background is black
            pass
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print("Background removed successfully!")

try:
    remove_background('assets/logo.png', 'assets/logo.png')
except Exception as e:
    print(f"Error: {e}")
