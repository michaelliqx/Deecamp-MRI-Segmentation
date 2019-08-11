'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AreaChart = require('./AreaChart');

var _AreaChart2 = _interopRequireDefault(_AreaChart);

var _BarChart = require('./BarChart');

var _BarChart2 = _interopRequireDefault(_BarChart);

var _index = require('./BulletChart/index');

var _DonutChart = require('./DonutChart');

var _DonutChart2 = _interopRequireDefault(_DonutChart);

var _GroupedBarChart = require('./GroupedBarChart');

var _GroupedBarChart2 = _interopRequireDefault(_GroupedBarChart);

var _LineChart = require('./LineChart');

var _LineChart2 = _interopRequireDefault(_LineChart);

var _PieChart = require('./PieChart');

var _PieChart2 = _interopRequireDefault(_PieChart);

var _SingleAreaChart = require('./SingleAreaChart');

var _SingleAreaChart2 = _interopRequireDefault(_SingleAreaChart);

var _SingleLineChart = require('./SingleLineChart');

var _SingleLineChart2 = _interopRequireDefault(_SingleLineChart);

var _SparklineChart = require('./SparklineChart');

var _SparklineChart2 = _interopRequireDefault(_SparklineChart);

var _StackedBarChart = require('./StackedBarChart');

var _StackedBarChart2 = _interopRequireDefault(_StackedBarChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chart = {
  AreaChart: _AreaChart2.default,
  BarChart: _BarChart2.default,
  BulletChart: _index.BulletChart,
  DonutChart: _DonutChart2.default,
  GroupedBarChart: _GroupedBarChart2.default,
  LineChart: _LineChart2.default,
  PieChart: _PieChart2.default,
  SingleAreaChart: _SingleAreaChart2.default,
  SingleLineChart: _SingleLineChart2.default,
  SparklineChart: _SparklineChart2.default,
  StackedBarChart: _StackedBarChart2.default
};

exports.default = Chart;