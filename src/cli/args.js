export const parseArgs = () => {
    const arr = process.argv.slice(2);
    const res = arr.map((item ,index) => {
        if(item.slice(0,2)==='--') {
            return item.slice(2)+ ' is ' + arr [index+1];
        }
    } );
    console.log(res.filter(Boolean).join(', '));

};
parseArgs();
