import pickle
import numpy as np
import glob
import argparse
import config
import os

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    data_path = os.path.join(config.BASEDIR, config.TRAIN_DATASET)
    parser.add_argument('--data', help='training data path', default=data_path)
    parser.add_argument('--out', help="output path", default="./5fold")
    parser.add_argument('--fraction', help="precentage of validation data", default=10)
    args = parser.parse_args()
    data = {}
    for fold in range(5):
        data['fold{}'.format(fold)] = {}
        HGG_filenames = glob.glob(args.data+"/HGG/*")
        LGG_filenames = glob.glob(args.data+"/LGG/*")
        print(len(HGG_filenames), len(LGG_filenames))
        val_length_HGG = len(HGG_filenames) // int(args.fraction)
        val_length_LGG = len(LGG_filenames) // int(args.fraction)
        np.random.shuffle(HGG_filenames)
        np.random.shuffle(LGG_filenames)
        data['fold{}'.format(fold)]['val'] = HGG_filenames[0:val_length_HGG] + LGG_filenames[0:val_length_LGG]
        data['fold{}'.format(fold)]['training'] =  HGG_filenames[val_length_HGG:] + LGG_filenames[val_length_LGG:]

    with open(args.out+".pkl", 'wb') as f:
        pickle.dump(data, f, protocol=pickle.HIGHEST_PROTOCOL)




