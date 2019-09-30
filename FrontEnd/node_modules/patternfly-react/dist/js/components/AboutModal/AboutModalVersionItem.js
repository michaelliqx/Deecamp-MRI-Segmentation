'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AboutModalVersionItem = function AboutModalVersionItem(_ref) {
  var className = _ref.className,
      label = _ref.label,
      versionText = _ref.versionText,
      props = _objectWithoutProperties(_ref, ['className', 'label', 'versionText']);

  return _react2.default.createElement(
    'li',
    _extends({ className: className }, props),
    _react2.default.createElement(
      'strong',
      null,
      label
    ),
    ' ',
    versionText
  );
};

AboutModalVersionItem.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Label for the version */
  label: _propTypes2.default.string.isRequired,
  /** Text for the version */
  versionText: _propTypes2.default.string.isRequired
};

AboutModalVersionItem.defaultProps = {
  className: ''
};

exports.default = AboutModalVersionItem;