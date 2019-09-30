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

var _Icon = require('../../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NotificationDrawerTitle = function NotificationDrawerTitle(_ref) {
  var expandable = _ref.expandable,
      onCloseClick = _ref.onCloseClick,
      onExpandClick = _ref.onExpandClick,
      title = _ref.title,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['expandable', 'onCloseClick', 'onExpandClick', 'title', 'children', 'className']);

  var classes = (0, _classnames2.default)('drawer-pf-title', className);

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    expandable && _react2.default.createElement('a', { className: 'drawer-pf-toggle-expand', onClick: onExpandClick }),
    _react2.default.createElement(
      'a',
      { className: 'drawer-pf-close', onClick: onCloseClick },
      _react2.default.createElement(_Icon.Icon, { name: 'close' })
    ),
    _react2.default.createElement(
      'h3',
      { className: 'text-center' },
      title
    ),
    children
  );
};

NotificationDrawerTitle.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes2.default.node,
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** Title prop */
  title: _propTypes2.default.string,
  /** Close/Expand Functions */
  onCloseClick: _propTypes2.default.func,
  onExpandClick: _propTypes2.default.func,
  /** is the Drawer expandable prop */
  expandable: _propTypes2.default.bool
};
NotificationDrawerTitle.defaultProps = {
  className: '',
  title: 'Notifications',
  onCloseClick: null,
  onExpandClick: null,
  children: null,
  expandable: true
};

exports.default = NotificationDrawerTitle;