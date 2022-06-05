import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {

    const { stdout } = process;
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const readableStream =  fs.createReadStream(filePath,'utf-8');
    readableStream.on('data', chunk => stdout.write(chunk));
};
read();
