import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import zlib from 'zlib';
import {pipeline} from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
    const oldPath= path.join(__dirname, 'files','fileToCompress.txt');
    const newPath= path.join(__dirname, 'files','archive.gz');
    const input = fs.createReadStream(oldPath, 'utf-8');
    const output = fs.createWriteStream(newPath);
    const gzip = zlib.createGzip();
    pipeline(input,gzip,output,() => {});
};

compress();
