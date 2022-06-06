import {Transform,pipeline} from 'stream';
export const transform = async () => {
    const readable= process.stdin;
    const writeable= process.stdout;
    const trans= new Transform({
        transform(chunk,enc,cb) {
            chunk = chunk.toString().trim() ;
            chunk= chunk.split('').reverse().join('');
            chunk =chunk?chunk+'\n':chunk;
            cb(null,chunk);
        }
    });
    pipeline(readable,trans,writeable,() => {});
    // Write your code here 
};
transform();
