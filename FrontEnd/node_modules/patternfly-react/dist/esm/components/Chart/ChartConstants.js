var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import PropTypes from 'prop-types';
import { compose, setDisplayName, mapProps, defaultProps, setPropTypes } from 'recompose';
import C3Chart from 'react-c3js';

import { c3ChartDefaults } from '../../common/patternfly';

/**
 * Chart defaults
 */

var CHART_CONFIG = {
  AREA_CHART: {
    type: 'area',
    displayName: 'AreaChart',
    className: 'area-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultAreaConfig()
  },
  BAR_CHART: {
    type: 'bar',
    displayName: 'BarChart',
    className: 'bar-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultBarConfig()
  },
  DONUT_CHART: {
    type: 'donut',
    displayName: 'DonutChart',
    className: 'donut-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultDonutConfig()
  },
  GROUPED_BAR_CHART: {
    type: 'bar',
    displayName: 'GroupedBarChart',
    className: 'bar-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultGroupedBarConfig()
  },
  LINE_CHART: {
    type: 'line',
    displayName: 'LineChart',
    className: 'line-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultLineConfig()
  },
  PIE_CHART: {
    type: 'pie',
    displayName: 'PieChart',
    className: 'pie-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultPieConfig()
  },
  SINGLE_AREA_CHART: {
    type: 'area',
    displayName: 'SingleAreaChart',
    className: 'area-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultSingleAreaConfig()
  },
  SINGLE_LINE_CHART: {
    type: 'line',
    displayName: 'SingleLineChart',
    className: 'line-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultSingleLineConfig()
  },
  SPARKLINE_CHART: {
    type: 'area',
    displayName: 'SparklineChart',
    className: 'chart-pf-sparkline',
    defaultConfig: c3ChartDefaults.getDefaultSparklineConfig()
  },
  STACKED_BAR_CHART: {
    type: 'bar',
    displayName: 'StackedBarChart',
    className: 'bar-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultStackedBarConfig()
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

  return compose(setDisplayName(config.displayName), setPropTypes(_extends({
    data: PropTypes.object.isRequired
  }, C3Chart.propTypes)), defaultProps(_extends({
    type: config.type,
    className: config.className
  }, config.defaultConfig)), mapProps(function (props) {
    return mapChartProps(name, props);
  }));
};

/**
 * Exports functions
 */

export { getComposer, CHART_CONFIG };