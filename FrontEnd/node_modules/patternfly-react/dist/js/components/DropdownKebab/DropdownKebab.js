'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('../Icon');

var _Dropdown = require('../Dropdown');

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * DropdownKebab Component for Patternfly React
 */
var DropdownKebab = function DropdownKebab(_ref) {
  var className = _ref.className,
      children = _ref.children,
      id = _ref.id,
      pullRight = _ref.pullRight,
      componentClass = _ref.componentClass,
      title = _ref.title,
      toggleStyle = _ref.toggleStyle;

  var kebabClass = (0, _classnames2.default)('dropdown-kebab-pf', className);
  return _react2.default.createElement(
    _Dropdown.Dropdown,
    { className: kebabClass, id: id, pullRight: pullRight, componentClass: componentClass },
    _react2.default.createElement(
      _Dropdown.Dropdown.Toggle,
      { bsStyle: toggleStyle, title: title, noCaret: true },
      _react2.default.createElement(_Icon.Icon, { name: 'ellipsis-v' })
    ),
    _react2.default.createElement(
      _Dropdown.Dropdown.Menu,
      null,
      children
    )
  );
};
DropdownKebab.propTypes = {
  /** additional kebab dropdown classes */
  className: _propTypes2.default.string,
  /** children nodes  */
  children: _propTypes2.default.node,
  /** kebab dropdown id */
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  /** menu right aligned */
  pullRight: _propTypes2.default.bool,
  /** dropdown component class */
  componentClass: _propTypes2.default.func,
  /** title for kebab */
  title: _propTypes2.default.string,
  /** toggle style */
  toggleStyle: _propTypes2.default.string
};
DropdownKebab.defaultProps = {
  className: '',
  children: null,
  pullRight: false,
  componentClass: _Button.ButtonGroup,
  title: '',
  toggleStyle: 'link'
};
exports.default = DropdownKebab;