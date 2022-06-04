import fs  from 'fs';
const fsPromises = fs.promises;
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
    const filePath= path.join(__dirname, 'files', 'fileToRemove.txt');

    try{
        await fsPromises.rm(filePath);
    }
    catch (e) {
        throw new Error('FS operation failed');
    }
};
remove();
