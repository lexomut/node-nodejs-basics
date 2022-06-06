import fs  from 'fs';
const fsPromises = fs.promises;
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
    const dirPath= path.join(__dirname, 'files');
    try {
        const files = await fsPromises.readdir(dirPath);
        console.log(files);
    }
    catch (e) {
        throw new Error('FS operation failed');
    }
};
list();
