export default {
    getData(type, url, labels) {
        switch (type) {
            case "text":
                return Math.floor((Math.random() * 100) + 1) + " request per hour for last 24 hours"
                break;
            case "table":
                return [{
                    name: 'Chuck Norris',
                    power: Infinity
                }, {
                    name: 'Bruce Lee',
                    power: 9000
                }, {
                    name: 'Jackie Chan',
                    power: 7000
                }, {
                    name: 'Jet Li',
                    power: 8000
                }]
                break;
            default:
                let newData = [];
                labels.forEach(label => newData.push(Math.floor((Math.random() * 100) + 1)));
                return newData;
        }
    }
}