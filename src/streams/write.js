import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const output = fs.createWriteStream(filePath);
    process.stdin.on('data', data => {output.write(data);});
};
write();
