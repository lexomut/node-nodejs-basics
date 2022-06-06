export const parseEnv = () => {
    const fined = Object.keys(process.env).
        filter(key => key.slice(0,4) ==='RSS_' ).
        map(key => key+'='+process.env[key]);
    console.log(fined.join('; '));
};
parseEnv();
