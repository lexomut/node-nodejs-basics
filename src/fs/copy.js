import fs  from 'fs';
const fsPromises = fs.promises;
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const copy = async () => {
    const oldDirPath= path.join(__dirname, 'files');
    const newDirPath= path.join(__dirname, 'files_copy');
    try {
        const files = await fsPromises.readdir(oldDirPath);
        await fsPromises.mkdir(newDirPath);
        files.forEach(filename => {
            fsPromises.copyFile(path.join(oldDirPath,filename),path.join(newDirPath,filename));
        });
    }
    catch (e) {
        throw new Error('FS operation failed');
    }


    // Write your code here
};

copy();
