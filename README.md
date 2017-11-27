# FusionCharts TypeScript example

Basic useful feature list:

Clone the repository:
```sh
$ git clone https://github.com/rohitkr/fusioncharts-typescript-sample.git
```

Install Dependencies:
```sh
$ npm install
```

Run `npm build` or `npm start`:
```sh
$ npm build
$ npm start
```

And here's some code! :+1:

Import `fusioncharts` & `fusioncharts/fusioncharts.charts` modules
```javascript
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
```

Resolve dependency
```
Charts(FusionCharts);
```

Here we are using JSON data to render the chart
```
let data: Object = {
    chart: {caption: 'FusionCharts TypeScript sample'},
    data: [{value: 5.2}, {value: 9.9}, {value: 6.4}]
};
```

Create chart instance
```
var chart = new FusionCharts({
    type: 'Column2d',
    width: 600,
    height: 400,
    dataSource: data
});
```

In your HTML template define a `<div id='chart-container'>` container to render the chart.
```
chart.render('chart-container');
```

This is on [GitHub](https://github.com/rohitkr/fusioncharts-typescript-sample.git).

