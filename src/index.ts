// Import dependency
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

// Resolve dependency
Charts(FusionCharts);

// Chart data
let data: Object = {
    chart: {caption: 'FusionCharts TypeScript sample'},
    data: [{value: 5.2}, {value: 9.9}, {value: 6.4}]
};

// Instantiate FusionCharts
var chart = new FusionCharts({
    type: 'Column2d',
    width: 600,
    height: 400,
    dataSource: data
});
// Render the chart in chart-container
chart.render('chart-container');
