'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _VerticalNavConstants = require('./VerticalNavConstants');

var _VerticalNavItemHelper = require('./VerticalNavItemHelper');

var _VerticalNavItemHelper2 = _interopRequireDefault(_VerticalNavItemHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * VerticalNav.Item - a child component for primary nav items under VerticalNav
 * This is a thin wrapper for VerticalNavItemHelper, to expose the warnings and the explicit-depth API.
 * In the future, we could lift some of the primary-specific code from Helper into this file.
 */
var BaseVerticalNavItem = function BaseVerticalNavItem(props) {
  if ((0, _VerticalNavConstants.wrongDepth)(props, 'primary')) return (0, _VerticalNavConstants.correctDepth)(props);
  return _react2.default.createElement(_VerticalNavItemHelper2.default, props);
};

BaseVerticalNavItem.propTypes = _extends({}, _VerticalNavItemHelper2.default.propTypes);

var VerticalNavItem = (0, _recompose.getContext)(_VerticalNavConstants.navContextTypes)(BaseVerticalNavItem);

VerticalNavItem.propTypes = _extends({}, BaseVerticalNavItem.propTypes);
VerticalNavItem.displayName = 'VerticalNav.Item';

exports.default = VerticalNavItem;