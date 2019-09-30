'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dropdown = require('../Dropdown');

var _CustomMastheadDropdown = require('./InnerComponents/CustomMastheadDropdown');

var _CustomMastheadDropdown2 = _interopRequireDefault(_CustomMastheadDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Masthead
 */
var MastheadDropdown = function MastheadDropdown(_ref) {
  var className = _ref.className,
      id = _ref.id,
      title = _ref.title,
      noCaret = _ref.noCaret,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'title', 'noCaret', 'children']);

  return _react2.default.createElement(
    _Dropdown.Dropdown,
    _extends({ id: id, componentClass: _CustomMastheadDropdown2.default, className: className }, props),
    _react2.default.createElement(
      _Dropdown.Dropdown.Toggle,
      { className: 'nav-item-iconic', bsStyle: 'link', noCaret: noCaret },
      title
    ),
    _react2.default.createElement(
      _Dropdown.Dropdown.Menu,
      null,
      children
    )
  );
};

MastheadDropdown.propTypes = {
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** ID of dropdown */
  id: _propTypes2.default.string.isRequired,
  /** Title of dropdown */
  title: _propTypes2.default.node,
  /** Children (likely MenuItem's) */
  children: _propTypes2.default.node,
  /** Caret in Dropdown */
  noCaret: _propTypes2.default.bool
};

MastheadDropdown.defaultProps = {
  className: '',
  title: null,
  children: null,
  noCaret: false
};

exports.default = MastheadDropdown;