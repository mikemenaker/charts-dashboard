# charts-dashboard

> Data driven charts dashboard

![Alt text](https://ibin.co/3bAsILgThioi.gif "Dashboard")


Relies on https://github.com/mikemenaker/mock-data-service for mock data


The webapp processes input JSON (from a URL) and builds a dashboard around it. Example JSON (mock data service JSON can be found here:  https://github.com/mikemenaker/mock-data-service/blob/master/data.json):
```json
{    
    "tabs": [
        {
            "name": "Data Tab 1",
            "data": [
                {
                    "title": "Pie 1",
                    "type": "pie",
                    "dataSource": "http://localhost:3030/data/stats/5",
                    "updateInterval": 30,
                    "labels": [
                        "Pie Label 1",
                        "Pie Label 2",
                        "Pie Label 3",
                        "Pie Label 4",
                        "Pie Label 5"
                    ]
                },
                {
                    "title": "Doughnut 1",
                    "type": "doughnut",
                    "dataSource": "http://localhost:3030/data/stats/3",
                    "updateInterval": 30,
                    "labels": [
                        "Doughnut Label 1",
                        "Doughnut Label 2",
                        "Doughnut Label 3"
                    ]
                }
        },
        {
            "name": "Data Tab 2",
            "description": "I'm a description",
            "data": [
                {
                    "title": "Doughnut 2",
                    "description": "I'm a description",
                    "type": "doughnut",
                    "dataSource": "http://localhost:3030/data/stats/4",
                    "updateInterval": 30,
                    "labels": [
                        "Doughnut Label 1",
                        "Doughnut Label 2",
                        "Doughnut Label 3",
                        "Doughnut Label 4"
                    ]
                }
        }
    ]
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
