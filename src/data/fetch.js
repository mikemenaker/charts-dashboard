import axios from 'axios';

export default {
    getData(type, url, labels) {
        switch (type) {
            case "text":
                return Math.floor((Math.random() * 100) + 1) + " request per hour for last 24 hours"
                break;
            case "table":
                return [{
                    name: 'Chuck Norris',
                    power: Math.floor((Math.random() * 100) + 1)
                }, {
                    name: 'Bruce Lee',
                    power: Math.floor((Math.random() * 100) + 1)
                }, {
                    name: 'Jackie Chan',
                    power: Math.floor((Math.random() * 100) + 1)
                }, {
                    name: 'Jet Li',
                    power: Math.floor((Math.random() * 100) + 1)
                }]
                break;
            default:
                let newData = [];
                labels.forEach(label => newData.push(Math.floor((Math.random() * 100) + 1)));
                return newData;
        }
    },
    async getConfig() {        
        const config = await axios.get("https://raw.githubusercontent.com/mikemenaker/charts-dashboard/master/src/data.json");                
        return config.data;
    }
}