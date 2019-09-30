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

var BulletChartAxisTic = function BulletChartAxisTic(_ref) {
  var className = _ref.className,
      text = _ref.text,
      vertical = _ref.vertical,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['className', 'text', 'vertical', 'value']);

  var bulletChartAxisTicClass = (0, _classnames2.default)('bullet-chart-pf-axis-tic', className);

  var ticStyle = void 0;
  if (vertical) {
    ticStyle = { bottom: 'calc(' + value + '% - 10px)' };
  } else {
    ticStyle = { left: 'calc(' + value + '% - 15px)' };
  }

  return _react2.default.createElement(
    'span',
    { className: bulletChartAxisTicClass, style: ticStyle },
    text || value
  );
};

BulletChartAxisTic.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Vertical axis, default false */
  vertical: _propTypes2.default.bool,
  /** Value for the tic mark */
  value: _propTypes2.default.number.isRequired,
  /** Text for the tic mark, default is the value */
  text: _propTypes2.default.string
};

BulletChartAxisTic.defaultProps = {
  className: '',
  vertical: false,
  text: undefined
};

exports.default = BulletChartAxisTic;