import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Worker } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'worker.js');

export const performCalculations = async () => {
    const numOfCpus = os.cpus().length;
    const promises = [];
    for (let i = 0; i < numOfCpus; i++) {
        promises.push(createWorker(i + 10));
    }
    const resultPromises = await Promise.all(promises);
    return resultPromises.map(res => {
        return {
            status: res ? 'resolved' : 'error',
            data: res
        };
    });
};

performCalculations().then(console.log);

function createWorker(workerData) {
    return new Promise(((resolve) => {
        const worker = new Worker(filePath, {workerData});
        worker.on('message', resolve);
        worker.on('error', () => resolve(null));
        worker.on('exit', () => resolve(null));
    }));
}
