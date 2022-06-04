import fs  from 'fs';
const fsPromises = fs.promises;
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
    const filePath= path.join(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath= path.join(__dirname, 'files', 'properFilename.md');
    try{
        await fsPromises.open(filePath,'wx');
        await fsPromises.rename(filePath,newFilePath);
    }
    catch (e) {
        throw new Error('FS operation failed');
    }
};
rename();
