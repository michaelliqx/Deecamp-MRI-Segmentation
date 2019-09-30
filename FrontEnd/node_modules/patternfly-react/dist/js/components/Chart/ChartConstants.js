'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHART_CONFIG = exports.getComposer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _reactC3js = require('react-c3js');

var _reactC3js2 = _interopRequireDefault(_reactC3js);

var _patternfly = require('../../common/patternfly');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Chart defaults
 */

var CHART_CONFIG = {
  AREA_CHART: {
    type: 'area',
    displayName: 'AreaChart',
    className: 'area-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultAreaConfig()
  },
  BAR_CHART: {
    type: 'bar',
    displayName: 'BarChart',
    className: 'bar-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultBarConfig()
  },
  DONUT_CHART: {
    type: 'donut',
    displayName: 'DonutChart',
    className: 'donut-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultDonutConfig()
  },
  GROUPED_BAR_CHART: {
    type: 'bar',
    displayName: 'GroupedBarChart',
    className: 'bar-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultGroupedBarConfig()
  },
  LINE_CHART: {
    type: 'line',
    displayName: 'LineChart',
    className: 'line-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultLineConfig()
  },
  PIE_CHART: {
    type: 'pie',
    displayName: 'PieChart',
    className: 'pie-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultPieConfig()
  },
  SINGLE_AREA_CHART: {
    type: 'area',
    displayName: 'SingleAreaChart',
    className: 'area-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultSingleAreaConfig()
  },
  SINGLE_LINE_CHART: {
    type: 'line',
    displayName: 'SingleLineChart',
    className: 'line-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultSingleLineConfig()
  },
  SPARKLINE_CHART: {
    type: 'area',
    displayName: 'SparklineChart',
    className: 'chart-pf-sparkline',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultSparklineConfig()
  },
  STACKED_BAR_CHART: {
    type: 'bar',
    displayName: 'StackedBarChart',
    className: 'bar-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultStackedBarConfig()
  }
};

/**
 * Helper functions
 */

var mapChartProps = function mapChartProps(name, props) {
  var newProps = _extends({}, props);

  // Set chart type
  if (props.data && !props.data.type) {
    newProps.data.type = props.type;
  }

  return newProps;
};

var getComposer = function getComposer(name) {
  var config = CHART_CONFIG[name];

  return (0, _recompose.compose)((0, _recompose.setDisplayName)(config.displayName), (0, _recompose.setPropTypes)(_extends({
    data: _propTypes2.default.object.isRequired
  }, _reactC3js2.default.propTypes)), (0, _recompose.defaultProps)(_extends({
    type: config.type,
    className: config.className
  }, config.defaultConfig)), (0, _recompose.mapProps)(function (props) {
    return mapChartProps(name, props);
  }));
};

/**
 * Exports functions
 */

exports.getComposer = getComposer;
exports.CHART_CONFIG = CHART_CONFIG;