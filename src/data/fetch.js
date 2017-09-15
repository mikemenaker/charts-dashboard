import axios from 'axios';

export default {
    async getData(url) {        
        const data = await axios.get(url);
        console.log(JSON.stringify(data.data.data));
        return data.data.data;
    },
    async getConfig() {        
        const config = await axios.get("http://localhost:3030/data");                
        return config.data;
    }
}