'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactC3js = require('react-c3js');

var _reactC3js2 = _interopRequireDefault(_reactC3js);

var _reactDom = require('react-dom');

var _recompose = require('recompose');

var _patternfly = require('../../common/patternfly');

var _ChartConstants = require('./ChartConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var pfSetDonutChartTitle = _patternfly.patternfly.pfSetDonutChartTitle;

var colIndexOfMaxValue = function colIndexOfMaxValue(columns) {
  return columns.reduce(function (iMax, x, i, arr) {
    return x[1] > arr[iMax][1] ? i : iMax;
  }, 0);
};

var setDonutTitle = function setDonutTitle(obj) {
  var primary = void 0;
  var secondary = void 0;

  var props = obj.props;
  var data = props.data,
      _props$title = props.title,
      title = _props$title === undefined ? {} : _props$title;
  var columns = data.columns;

  var sum = columns.reduce(function (acc, x) {
    return acc + x[1];
  }, 0);
  var iMax = colIndexOfMaxValue(columns);

  switch (title.type) {
    case 'percent':
      primary = Math.round(100 * columns[iMax][1] / sum).toString() + '%';

      var _columns$iMax = _slicedToArray(columns[iMax], 1);

      secondary = _columns$iMax[0];

      break;
    case 'max':
      primary = Math.round(columns[iMax][1]).toString();

      var _columns$iMax2 = _slicedToArray(columns[iMax], 1);

      secondary = _columns$iMax2[0];

      break;
    case 'total':
    default:
      primary = Math.round(sum).toString();
      break;
  }

  pfSetDonutChartTitle(
  // eslint-disable-next-line react/no-find-dom-node
  (0, _reactDom.findDOMNode)(obj), title.primary || primary, title.secondary || secondary);
};

var addDonutTitle = (0, _recompose.lifecycle)({
  componentDidMount: function componentDidMount() {
    setDonutTitle(this);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    setDonutTitle(this);
  }
});

var DonutChart = (0, _recompose.compose)((0, _ChartConstants.getComposer)('DONUT_CHART'), addDonutTitle)(function (_ref) {
  var className = _ref.className,
      type = _ref.type,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, ['className', 'type', 'data']);

  return _react2.default.createElement(_reactC3js2.default, _extends({ className: className, type: type, data: data }, props));
});

exports.default = DonutChart;