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

/**
 * Masthead
 */
var MastheadCollapse = function MastheadCollapse(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var menusClasses = (0, _classnames2.default)('collapse', 'navbar-collapse', className);

  return _react2.default.createElement(
    'nav',
    _extends({ className: menusClasses }, props),
    _react2.default.createElement(
      'ul',
      { className: 'nav navbar-nav navbar-right navbar-iconic navbar-utility' },
      children
    )
  );
};

MastheadCollapse.propTypes = {
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** Children (likely MastheadDropdown's) */
  children: _propTypes2.default.node
};

MastheadCollapse.defaultProps = {
  className: '',
  children: null
};

exports.default = MastheadCollapse;