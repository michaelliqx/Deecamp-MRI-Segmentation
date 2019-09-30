'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _patternfly = require('../../../common/patternfly');

var _index = require('../../Tooltip/index');

var _helpers = require('../../../common/helpers');

var _BulletChartValue = require('./BulletChartValue');

var _BulletChartValue2 = _interopRequireDefault(_BulletChartValue);

var _BulletChartRange = require('./BulletChartRange');

var _BulletChartRange2 = _interopRequireDefault(_BulletChartRange);

var _BulletChartAxis = require('./BulletChartAxis');

var _BulletChartAxis2 = _interopRequireDefault(_BulletChartAxis);

var _BulletChartAxisTic = require('./BulletChartAxisTic');

var _BulletChartAxisTic2 = _interopRequireDefault(_BulletChartAxisTic);

var _BulletChartLegend = require('./BulletChartLegend');

var _BulletChartLegend2 = _interopRequireDefault(_BulletChartLegend);

var _BulletChartLegendItem = require('./BulletChartLegendItem');

var _BulletChartLegendItem2 = _interopRequireDefault(_BulletChartLegendItem);

var _BulletChartThreshold = require('./BulletChartThreshold');

var _BulletChartThreshold2 = _interopRequireDefault(_BulletChartThreshold);

var _BulletChartTitle = require('./BulletChartTitle');

var _BulletChartTitle2 = _interopRequireDefault(_BulletChartTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var randomId = function randomId() {
  return Date.now();
};

var defaultPrimaryColors = [_patternfly.patternfly.pfPaletteColors.blue300, _patternfly.patternfly.pfPaletteColors.blue400, _patternfly.patternfly.pfPaletteColors.blue500, _patternfly.patternfly.pfPaletteColors.blue600];

var defaultExtendedColors = [_patternfly.patternfly.pfPaletteColors.blue400, _patternfly.patternfly.pfPaletteColors.lightBlue400, _patternfly.patternfly.pfPaletteColors.cyan400, _patternfly.patternfly.pfPaletteColors.green400, _patternfly.patternfly.pfPaletteColors.lightGreen400, _patternfly.patternfly.pfPaletteColors.gold400, _patternfly.patternfly.pfPaletteColors.orange400, _patternfly.patternfly.pfPaletteColors.red300, _patternfly.patternfly.pfPaletteColors.purple400];

var BulletChart = function BulletChart(_ref) {
  var vertical = _ref.vertical,
      stacked = _ref.stacked,
      label = _ref.label,
      details = _ref.details,
      values = _ref.values,
      percents = _ref.percents,
      maxValue = _ref.maxValue,
      useDots = _ref.useDots,
      useExtendedColors = _ref.useExtendedColors,
      thresholdWarning = _ref.thresholdWarning,
      thresholdWarningLegendText = _ref.thresholdWarningLegendText,
      thresholdWarningLegendTextFunction = _ref.thresholdWarningLegendTextFunction,
      thresholdWarningTooltipFunction = _ref.thresholdWarningTooltipFunction,
      thresholdError = _ref.thresholdError,
      thresholdErrorLegendText = _ref.thresholdErrorLegendText,
      thresholdErrorLegendTextFunction = _ref.thresholdErrorLegendTextFunction,
      thresholdErrorTooltipFunction = _ref.thresholdErrorTooltipFunction,
      ranges = _ref.ranges,
      showAxis = _ref.showAxis,
      customAxis = _ref.customAxis,
      showLegend = _ref.showLegend,
      customLegend = _ref.customLegend,
      className = _ref.className;

  var classes = (0, _classnames2.default)('bullet-chart-pf', { 'bullet-chart-pf-vertical': vertical }, className);

  // Order the ranges into an array of 3 ranges lowest to highest, insert 0's if necessary
  // this is to keep darkest as highest and use darkest colors first (ie. 1 range still uses darkest)
  var rangeValues = [];
  if (ranges) {
    for (var i = 0; i < 3; i++) {
      if (ranges.length > i) {
        rangeValues.push(ranges[i]);
      } else {
        rangeValues.push({ value: 0, title: '' });
      }
    }
    rangeValues.sort(function (range1, range2) {
      return range1.value - range2.value;
    });
  }

  var displayValues = [].concat(_toConsumableArray(values));

  var defaultColors = useExtendedColors ? defaultExtendedColors : defaultPrimaryColors;
  displayValues.forEach(function (value, index) {
    if (!value.color && defaultColors[index]) {
      value.color = defaultColors[index];
    }
  });

  if (!stacked) {
    displayValues.sort(function (value1, value2) {
      return value1.value - value2.value;
    });
  }

  var renderValues = function renderValues() {
    var prevValue = 0;

    var getPrevValue = function getPrevValue(nextValue) {
      if (stacked) {
        var retVal = prevValue;
        prevValue += nextValue;

        return retVal;
      }
      return 0;
    };

    return _react2.default.createElement(
      'div',
      { className: 'bullet-chart-pf-values-container' },
      displayValues.map(function (value, index) {
        return _react2.default.createElement(_BulletChartValue2.default, {
          key: value.title + '-' + index,
          value: value,
          percent: percents,
          maxValue: maxValue,
          prevValue: getPrevValue(value.value),
          dot: useDots,
          vertical: vertical
        });
      })
    );
  };

  var renderLegend = function renderLegend() {
    if (showLegend) {
      if (customLegend) {
        return customLegend;
      }

      var warningThreshold = thresholdWarningLegendTextFunction(thresholdWarning) || thresholdWarningLegendText;
      var errorThreshold = thresholdErrorLegendTextFunction(thresholdError) || thresholdErrorLegendText;
      var thresholdTipFunction = function thresholdTipFunction(title, value) {
        if (thresholdWarningTooltipFunction) {
          return thresholdWarningTooltipFunction(title, value);
        }
        var tipText = title + ': ' + value + (percents ? '%' : '');
        return _react2.default.createElement(
          _index.Tooltip,
          { id: randomId() },
          tipText
        );
      };

      return _react2.default.createElement(
        _BulletChartLegend2.default,
        null,
        displayValues.map(function (value, index) {
          var tooltipFunction = function tooltipFunction() {
            if (value.tooltipFunction) {
              return value.tooltipFunction(value.value, value.title);
            }

            var tipText = value.title + ': ' + value.value + (percents ? '%' : '');
            return _react2.default.createElement(
              _index.Tooltip,
              { id: value.tooltipId || randomId() },
              tipText
            );
          };

          var legendTextFunction = value.legendTextFunction || _helpers.noop;
          return _react2.default.createElement(_BulletChartLegendItem2.default, {
            key: 'value-' + index,
            title: legendTextFunction(value) || value.legendText || value.title,
            value: value.value,
            color: value.color,
            tooltipFunction: tooltipFunction
          });
        }),
        rangeValues.map(function (range, index) {
          if (range.value > 0 && (percents ? range.value <= 100 : range.value <= maxValue)) {
            var tooltipFunction = function tooltipFunction() {
              if (range.tooltipFunction) {
                return range.tooltipFunction(range.value, range.title);
              }

              var tipText = range.title + ': ' + range.value + (percents ? '%' : '');
              return _react2.default.createElement(
                _index.Tooltip,
                { id: range.tooltipId || randomId() },
                tipText
              );
            };

            var legendTextFunction = range.legendTextFunction || _helpers.noop;

            return _react2.default.createElement(_BulletChartLegendItem2.default, {
              key: 'range-' + index,
              title: legendTextFunction(range) || range.legendText || range.title,
              value: range.value,
              boxClassName: 'range-' + index,
              color: range.color,
              tooltipFunction: tooltipFunction
            });
          }

          return null;
        }),
        warningThreshold && _react2.default.createElement(_BulletChartLegendItem2.default, {
          title: warningThreshold,
          value: thresholdWarning,
          boxClassName: 'warning',
          tooltipFunction: thresholdTipFunction
        }),
        errorThreshold && _react2.default.createElement(_BulletChartLegendItem2.default, {
          title: errorThreshold,
          value: thresholdError,
          boxClassName: 'error',
          tooltipFunction: thresholdTipFunction
        })
      );
    }

    return null;
  };

  var renderChartData = function renderChartData() {
    return _react2.default.createElement(
      'div',
      { className: 'bullet-chart-pf-data-container' },
      renderValues(),
      _react2.default.createElement(_BulletChartThreshold2.default, {
        className: 'warning',
        threshold: thresholdWarning,
        vertical: vertical,
        percent: percents,
        maxValue: maxValue
      }),
      _react2.default.createElement(_BulletChartThreshold2.default, {
        className: 'error',
        threshold: thresholdError,
        vertical: vertical,
        percent: percents,
        maxValue: maxValue
      }),
      rangeValues.map(function (range, index) {
        return _react2.default.createElement(_BulletChartRange2.default, {
          key: range.value + '-' + index,
          value: range.value,
          color: range.color,
          percent: percents,
          maxValue: maxValue,
          index: index + 1,
          vertical: vertical
        });
      })
    );
  };

  var renderChartAxis = function renderChartAxis() {
    if (customAxis) {
      return customAxis;
    }

    return _react2.default.createElement(
      _BulletChartAxis2.default,
      null,
      _react2.default.createElement(_BulletChartAxisTic2.default, { value: 0, vertical: vertical }),
      _react2.default.createElement(_BulletChartAxisTic2.default, {
        value: 25,
        text: percents ? undefined : '' + Math.floor(maxValue * 0.25),
        vertical: vertical
      }),
      _react2.default.createElement(_BulletChartAxisTic2.default, {
        value: 50,
        text: percents ? undefined : '' + Math.floor(maxValue * 0.5),
        vertical: vertical
      }),
      _react2.default.createElement(_BulletChartAxisTic2.default, {
        value: 75,
        text: percents ? undefined : '' + Math.floor(maxValue * 0.75),
        vertical: vertical
      }),
      _react2.default.createElement(_BulletChartAxisTic2.default, { value: 100, text: percents ? undefined : '' + Math.floor(maxValue), vertical: vertical })
    );
  };

  var renderChartContainer = function renderChartContainer() {
    var containerClasses = (0, _classnames2.default)('bullet-chart-pf-container', {
      'show-axis': showAxis
    });
    var chartContainer = _react2.default.createElement(
      'div',
      { className: containerClasses },
      renderChartData(),
      showAxis && renderChartAxis()
    );

    if (vertical) {
      return _react2.default.createElement(
        'div',
        { className: 'bullet-chart-pf-vertical-data-container' },
        chartContainer
      );
    }

    return chartContainer;
  };

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement(
      'div',
      { className: 'bullet-chart-pf-chart' },
      _react2.default.createElement(_BulletChartTitle2.default, { label: label, details: details }),
      renderChartContainer(),
      _react2.default.createElement('span', { className: 'bullet-chart-pf-overflow' })
    ),
    renderLegend()
  );
};

BulletChart.propTypes = {
  /** Option to display the bullet chart vertically, default is false */
  vertical: _propTypes2.default.bool,
  /** Option to stack values (each value is in addition to previous value), default is false */
  stacked: _propTypes2.default.bool,
  /** Text to display as the main label for the chart */
  label: _propTypes2.default.string,
  /** Text to display for details of the chart */
  details: _propTypes2.default.string,
  /** Array of values, value, title (for legend and tooltip), color, tooltip function(value, title), legendText(optional),
   * legendTextFunction(value). The legendTextFunction takes priority, then the legendTextFunction, then the default
   * legend text.
   * For Primary colors the first four values can use default colors, for Extended colors the first nine
   * values use default colors, further values the color MUST be specified. */
  values: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.number.isRequired,
    title: _propTypes2.default.string,
    color: _propTypes2.default.string,
    tooltipFunction: _propTypes2.default.func,
    legendText: _propTypes2.default.string,
    legendTextFunction: _propTypes2.default.func
  })).isRequired,
  /** Option to use values as percentages, default is true */
  percents: _propTypes2.default.bool,
  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: _propTypes2.default.number,
  /** Use a dot rather than a bar to depict values, default false */
  useDots: _propTypes2.default.bool,
  /** Use extended color palette for default colors, default false */
  useExtendedColors: _propTypes2.default.bool,
  /** Warning threshold (optional), warning measure line drawn at this point */
  thresholdWarning: _propTypes2.default.number,
  /** Warning threshold legend text (optional), text to show in the legend for the warning threshold */
  thresholdWarningLegendText: _propTypes2.default.string,
  /** Warning threshold legend text function(warningValue), function to return text to show in the legend for the warning threshold */
  thresholdWarningLegendTextFunction: _propTypes2.default.func,
  /** Warning threshold legend tooltip function(text, value), function to return tooltip for the legend */
  thresholdWarningTooltipFunction: _propTypes2.default.func,
  /** Error threshold (optional), error measure line drawn at this point */
  thresholdError: _propTypes2.default.number,
  /** Error threshold legend text (optional), text to show in the legend for the warning threshold */
  thresholdErrorLegendText: _propTypes2.default.string,
  /** Error threshold legend text function(text, value), function to return text to show in the legend for the warning threshold */
  thresholdErrorLegendTextFunction: _propTypes2.default.func,
  /** Error threshold legend tooltip function(warningValue), function to return tooltip for the legend */
  thresholdErrorTooltipFunction: _propTypes2.default.func,
  /** Ranges, array of range bars (3 maximum, additional ranges will be ignored) */
  ranges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.number.isRequired,
    title: _propTypes2.default.string,
    color: _propTypes2.default.string,
    tooltipFunction: _propTypes2.default.func,
    legendText: _propTypes2.default.string,
    legendTextFunction: _propTypes2.default.func
  })),
  /** Option to show the axis, default is true */
  showAxis: _propTypes2.default.bool,
  /** Custom Axis */
  customAxis: _propTypes2.default.node,
  /** Show the legend, default false */
  showLegend: _propTypes2.default.bool,
  /** Custom Legend */
  customLegend: _propTypes2.default.node,
  /** User's custom classes */
  className: _propTypes2.default.string
};

BulletChart.defaultProps = {
  vertical: false,
  stacked: false,
  label: null,
  details: null,
  percents: true,
  maxValue: 100,
  useDots: false,
  useExtendedColors: false,
  thresholdWarning: 70,
  thresholdWarningLegendText: null,
  thresholdWarningLegendTextFunction: _helpers.noop,
  thresholdWarningTooltipFunction: null,
  thresholdError: 90,
  thresholdErrorLegendText: null,
  thresholdErrorLegendTextFunction: _helpers.noop,
  thresholdErrorTooltipFunction: null,
  ranges: null,
  showAxis: true,
  customAxis: null,
  showLegend: false,
  customLegend: null,
  className: null
};

BulletChart.DEFAULT_PRIMARY_COLORS = defaultPrimaryColors;
BulletChart.DEFAULT_EXTENDED_COLORS = defaultExtendedColors;

BulletChart.Title = _BulletChartTitle2.default;
BulletChart.Value = _BulletChartValue2.default;
BulletChart.Range = _BulletChartRange2.default;
BulletChart.Axis = _BulletChartAxis2.default;
BulletChart.AxisTic = _BulletChartAxisTic2.default;
BulletChart.Legend = _BulletChartLegend2.default;
BulletChart.LegendItem = _BulletChartLegendItem2.default;
BulletChart.Threshold = _BulletChartThreshold2.default;

exports.default = BulletChart;