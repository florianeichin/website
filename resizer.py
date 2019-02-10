import numpy as np
import cv2
import os

input_path = "./origimg/"
output_path = "./img/"
max_height = 60
max_width = 60

for filename in os.listdir(input_path):
    if filename.endswith(".png"):
        print(filename)
        image = cv2.imread(input_path+filename, cv2.IMREAD_UNCHANGED)
        out = output_path + filename
        
        height, width = image.shape[:2]
        if max_height < height or max_width < width:
                scaling_factor = max_height / float(height)
                if max_width/float(width) < scaling_factor:
                        scaling_factor = max_width / float(width)
                img = cv2.resize(image, None, fx=scaling_factor, fy=scaling_factor, interpolation=cv2.INTER_AREA)
                cv2.imwrite(out,img)





        import cv2

img = cv2.imread('YOUR_PATH_TO_IMG')

height, width = img.shape[:2]
max_height = 300
max_width = 300

if max_height < height or max_width < width:
    # get scaling factor
    scaling_factor = max_height / float(height)
    if max_width/float(width) < scaling_factor:
        scaling_factor = max_width / float(width)
    # resize image
    img = cv2.resize(img, None, fx=scaling_factor, fy=scaling_factor, interpolation=cv2.INTER_AREA)

