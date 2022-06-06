import fs  from 'fs';
const fsPromises = fs.promises;
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    const filePath= path.join(__dirname, 'files', 'fileToRead.txt');
    try{
        const file = await fsPromises.readFile(filePath, 'utf8');
        console.log(file);
   
    }
    catch (e) {
        throw new Error('FS operation failed');
    }
};
read();
