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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NotificationDrawerPanelCollapse = function NotificationDrawerPanelCollapse(_ref) {
  var children = _ref.children,
      collapseIn = _ref.collapseIn,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'collapseIn', 'className']);

  var classes = (0, _classnames2.default)('panel-collapse', { 'collapse in': collapseIn }, className);

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};
NotificationDrawerPanelCollapse.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes2.default.node.isRequired,
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** collapse in bool */
  collapseIn: _propTypes2.default.bool
};
NotificationDrawerPanelCollapse.defaultProps = {
  className: '',
  collapseIn: false
};

exports.default = NotificationDrawerPanelCollapse;