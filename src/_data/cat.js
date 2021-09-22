const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async () => {
    try{
        let json = await Cache('https://aws.random.cat/meow', {
            duration: '1d', // 1 day
            type: 'json' // also supports "text" or "buffer"
        });
        console.table(json);
        return json.file;
    } catch(e){
        console.log(e);
        return {};
    }
}