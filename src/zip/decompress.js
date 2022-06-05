import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import zlib from 'zlib';
import {pipeline} from 'stream';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const decompress = async () => {
    const oldPath= path.join(__dirname, 'files','archive.gz');
    const newPath= path.join(__dirname, 'files','fileToCompress.txt');
    const input = fs.createReadStream(oldPath);
    const output = fs.createWriteStream(newPath,'utf-8');
    const unzip = zlib.createUnzip();
    pipeline(input,unzip,output,() => {});
};
decompress();
