const axios = require('axios');
const Cache = require('@11ty/eleventy-cache-assets');


module.exports = async () => {
    try{

        let json = await Cache('https://api.github.com/users/ChristianBackstrom/repos', {
            duration: '1d', // 1 day
            type: 'json' // also supports "text" or "buffer"
        });
        console.log(json);
        return json;
    } catch (e) {
        console.log(e);
        return {};
    }
};
