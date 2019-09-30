var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import C3Chart from 'react-c3js';
import { getComposer } from './ChartConstants';

var GroupedBarChart = getComposer('GROUPED_BAR_CHART')(function (_ref) {
  var className = _ref.className,
      type = _ref.type,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, ['className', 'type', 'data']);

  return React.createElement(C3Chart, _extends({ className: className, type: type, data: data }, props));
});

export default GroupedBarChart;