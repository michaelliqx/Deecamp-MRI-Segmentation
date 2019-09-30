'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoginCardRememberMe = function LoginCardRememberMe(_ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['onClick', 'label', 'className']);

  return label && _react2.default.createElement(
    'label',
    { className: 'checkbox-label ' + className },
    _react2.default.createElement('input', _extends({}, props, { type: 'checkbox', onClick: onClick })),
    ' ',
    label
  );
};

LoginCardRememberMe.propTypes = {
  /** The checkbox label. */
  label: _propTypes2.default.string,
  /** Additional css classes. */
  className: _propTypes2.default.string,
  /** Callback to trigger when clicking the checkbox */
  onClick: _propTypes2.default.func
};

LoginCardRememberMe.defaultProps = {
  label: null,
  className: '',
  onClick: _helpers.noop
};

exports.default = LoginCardRememberMe;