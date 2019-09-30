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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BulletChartAxis = function BulletChartAxis(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var bulletChartAxisClass = (0, _classnames2.default)('bullet-chart-pf-axis', className);

  return _react2.default.createElement(
    'div',
    { className: bulletChartAxisClass },
    children
  );
};

BulletChartAxis.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node.isRequired,
  /** Additional css classes */
  className: _propTypes2.default.string
};

BulletChartAxis.defaultProps = {
  className: ''
};

exports.default = BulletChartAxis;