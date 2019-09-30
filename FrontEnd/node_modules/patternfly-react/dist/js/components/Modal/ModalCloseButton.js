'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ModalCloseButton = function ModalCloseButton(_ref) {
  var className = _ref.className,
      closeText = _ref.closeText,
      props = _objectWithoutProperties(_ref, ['className', 'closeText']);

  return _react2.default.createElement(
    'button',
    _extends({ className: (0, _classnames2.default)('close', className) }, props),
    _react2.default.createElement(_Icon.Icon, { type: 'pf', name: 'close', 'aria-hidden': 'true', title: closeText }),
    _react2.default.createElement(
      'span',
      { className: 'sr-only' },
      closeText
    )
  );
};

ModalCloseButton.defaultProps = {
  className: '',
  closeText: 'Close'
};

ModalCloseButton.propTypes = {
  /** additional classes */
  className: _propTypes2.default.string,
  /** Alternate text for close button for screen readers (default 'Close') */
  closeText: _propTypes2.default.string
};

exports.default = ModalCloseButton;