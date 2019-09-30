import SimpleITK as sitk
import os
import numpy as np

def main():
    print(os.getcwd())
    brain = sitk.GetArrayFromImage(sitk.ReadImage("spgr.nii"))
    brain = sitk.GetImageFromArray(brain.astype(np.int16))
    sitk.WriteImage(brain,'brain.nii.gz')

if __name__ == '__main__':
    main()
