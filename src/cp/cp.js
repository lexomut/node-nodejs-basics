import childProcess from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
    const filePath = path.join(__dirname, 'files', 'script.js');
    const child = childProcess.fork(filePath,args);
    process.stdout.write('hello world');
    process.stdin.on('data',(m) => process.stdout.write('child write: '+m));


};
spawnChildProcess([23456,'3456','wqerty']);

//
