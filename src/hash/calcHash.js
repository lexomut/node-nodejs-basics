import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const fsPromises = fs.promises;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    try {
        const hash = crypto.createHash('sha256');
        let file = await fsPromises.readFile(filePath, 'utf8');
        file = hash.update(file);
        file = file.digest('hex');
        console.log(file);
    } catch (e) {
        throw new Error('FS operation failed');
    }

};

calculateHash();
