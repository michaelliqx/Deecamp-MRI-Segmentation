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

var _Dropdown = require('../../../Dropdown');

var _Icon = require('../../../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NotificationDrawerDropDown = function NotificationDrawerDropDown(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      pullRight = _ref.pullRight,
      props = _objectWithoutProperties(_ref, ['id', 'children', 'className', 'pullRight']);

  var classes = (0, _classnames2.default)('dropdown', { 'pull-right': pullRight }, 'dropdown-kebab-pf', className);

  return _react2.default.createElement(
    _Dropdown.Dropdown,
    { className: classes, id: id },
    _react2.default.createElement(
      _Dropdown.Dropdown.Toggle,
      { bsStyle: 'link', noCaret: true },
      _react2.default.createElement(_Icon.Icon, { name: 'ellipsis-v' })
    ),
    _react2.default.createElement(
      _Dropdown.Dropdown.Menu,
      { className: 'dropdown-menu-right' },
      children
    )
  );
};
NotificationDrawerDropDown.propTypes = {
  /** dropdown button id */
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** Child node - contents of the element */
  children: _propTypes2.default.node.isRequired,
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** menu right aligned */
  pullRight: _propTypes2.default.bool
};
NotificationDrawerDropDown.defaultProps = {
  pullRight: true,
  id: null,
  className: ''
};
exports.default = NotificationDrawerDropDown;