'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BulletChartTitle = function BulletChartTitle(_ref) {
  var className = _ref.className,
      label = _ref.label,
      details = _ref.details,
      props = _objectWithoutProperties(_ref, ['className', 'label', 'details']);

  var titleContainerClasses = (0, _classnames2.default)('bullet-chart-pf-title-container', className);

  return _react2.default.createElement(
    'div',
    _extends({ className: titleContainerClasses }, props),
    _react2.default.createElement(
      'div',
      { className: 'bullet-chart-pf-title' },
      label
    ),
    _react2.default.createElement(
      'div',
      { className: 'bullet-chart-pf-details' },
      details
    )
  );
};

BulletChartTitle.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Label text */
  label: _propTypes2.default.string,
  /** Details text */
  details: _propTypes2.default.string
};

BulletChartTitle.defaultProps = {
  className: '',
  label: '',
  details: ''
};

exports.default = BulletChartTitle;