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

var _Dropdown = require('../Dropdown');

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardDropdownButton = function CardDropdownButton(_ref) {
  var id = _ref.id,
      children = _ref.children,
      title = _ref.title,
      className = _ref.className,
      pullRight = _ref.pullRight,
      props = _objectWithoutProperties(_ref, ['id', 'children', 'title', 'className', 'pullRight']);

  var classes = (0, _classnames2.default)('card-pf-time-frame-filter', className);
  var CustomButtonGroup = function CustomButtonGroup(customGroup) {
    return _react2.default.createElement(_Button.ButtonGroup, _extends({}, customGroup, { bsClass: ' ' }));
  };
  return _react2.default.createElement(
    _Dropdown.Dropdown,
    _extends({ className: classes, id: id, pullRight: pullRight, componentClass: CustomButtonGroup }, props),
    _react2.default.createElement(
      _Dropdown.Dropdown.Toggle,
      null,
      title
    ),
    _react2.default.createElement(
      _Dropdown.Dropdown.Menu,
      null,
      children
    )
  );
};
CardDropdownButton.propTypes = {
  /** dropdown button id */
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** Child node - contents of the element */
  children: _propTypes2.default.node.isRequired,
  /** Dropdown title */
  title: _propTypes2.default.node,
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** menu right aligned */
  pullRight: _propTypes2.default.bool
};
CardDropdownButton.defaultProps = {
  pullRight: true,
  id: null,
  title: null,
  className: ''
};
exports.default = CardDropdownButton;