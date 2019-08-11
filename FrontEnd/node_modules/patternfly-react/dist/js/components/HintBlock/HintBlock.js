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

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var HintBlock = function HintBlock(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      title = _ref.title,
      body = _ref.body,
      buttonContent = _ref.buttonContent,
      onButtonClick = _ref.onButtonClick,
      props = _objectWithoutProperties(_ref, ['className', 'onClose', 'title', 'body', 'buttonContent', 'onButtonClick']);

  var classes = (0, _classnames2.default)('hint-block-pf', className);

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    onClose && _react2.default.createElement(
      'button',
      { type: 'button', className: 'close', 'aria-hidden': 'true', 'aria-label': 'Close', onClick: onClose },
      _react2.default.createElement('span', { className: 'pficon pficon-close' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'hint-block-pf-title' },
      title
    ),
    _react2.default.createElement(
      'div',
      { className: 'hint-block-pf-body' },
      body
    ),
    buttonContent && _react2.default.createElement(
      'button',
      { className: 'btn btn-primary', type: 'button', onClick: onButtonClick },
      buttonContent
    )
  );
};

HintBlock.propTypes = {
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** Close callback, if not provided the block will not be closable */
  onClose: _propTypes2.default.func,
  /** Title for the hint block */
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired,
  /** Body of the hint block */
  body: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired,
  /** Optional button contents for the hint block */
  buttonContent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /** Callback for the button if buttonContent is provided */
  onButtonClick: _propTypes2.default.func
};

HintBlock.defaultProps = {
  className: '',
  onClose: null,
  buttonContent: null,
  onButtonClick: _helpers.noop
};

exports.default = HintBlock;