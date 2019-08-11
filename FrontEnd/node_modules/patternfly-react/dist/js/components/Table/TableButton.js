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

var _Button = require('../Button');

var _ButtonConstants = require('../Button/ButtonConstants');

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * TableButton component for Patternfly React
 */
var TableButton = function TableButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'onClick']);

  var classes = (0, _classnames2.default)('table-view-pf-btn', className);

  var bsStyle = props.bsStyle,
      otherProps = _objectWithoutProperties(props, ['bsStyle']);

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, otherProps),
    _react2.default.createElement(
      _Button.Button,
      { onClick: onClick, bsStyle: bsStyle },
      children
    )
  );
};
TableButton.propTypes = {
  /** Children nodes  */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** onClick callback for button */
  onClick: _propTypes2.default.func,
  bsStyle: _propTypes2.default.oneOf(_ButtonConstants.BUTTON_BS_STYLES)
};
TableButton.defaultProps = {
  children: null,
  className: '',
  onClick: _helpers.noop,
  bsStyle: 'default'
};
TableButton.BUTTON_BS_STYLES = _ButtonConstants.BUTTON_BS_STYLES;

exports.default = TableButton;