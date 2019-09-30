'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OverlayTrigger = require('../../OverlayTrigger');

var _Tooltip = require('../../Tooltip');

var _Icon = require('../../Icon');

var _Button = require('../../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationDrawerToggle = function NotificationDrawerToggle(_ref) {
  var hasUnreadMessages = _ref.hasUnreadMessages,
      onClick = _ref.onClick;

  var iconName = hasUnreadMessages ? 'bell' : 'bell-o';
  var tooltip = _react2.default.createElement(
    _Tooltip.Tooltip,
    { id: 'tooltip' },
    'Notifications'
  );

  return _react2.default.createElement(
    _OverlayTrigger.OverlayTrigger,
    { placement: 'bottom', id: 'notifications-toggle-icon', overlay: tooltip },
    _react2.default.createElement(
      _Button.Button,
      { onClick: onClick, bsStyle: 'link', className: 'nav-item-iconic' },
      _react2.default.createElement(_Icon.Icon, { name: iconName, 'aria-describedby': 'tooltip' })
    )
  );
};
NotificationDrawerToggle.propTypes = {
  /** has Unread Messages Bool */
  hasUnreadMessages: _propTypes2.default.bool,
  /** onClick func */
  onClick: _propTypes2.default.func
};
NotificationDrawerToggle.defaultProps = {
  hasUnreadMessages: true,
  onClick: null
};

exports.default = NotificationDrawerToggle;