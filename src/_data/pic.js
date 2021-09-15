const axios = require('axios');

module.exports = async() => {
    const {data} = await axios.get('https://avatars.githubusercontent.com/u/54669344?v=4');
    
    return data;
}