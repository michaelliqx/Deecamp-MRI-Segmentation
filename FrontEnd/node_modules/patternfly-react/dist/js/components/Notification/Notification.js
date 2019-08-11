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

var _Spinner = require('../Spinner/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _NotificationContent = require('./NotificationContent');

var _NotificationContent2 = _interopRequireDefault(_NotificationContent);

var _NotificationInfo = require('./NotificationInfo');

var _NotificationInfo2 = _interopRequireDefault(_NotificationInfo);

var _NotificationMessage = require('./NotificationMessage');

var _NotificationMessage2 = _interopRequireDefault(_NotificationMessage);

var _NotificationInfoRight = require('./NotificationInfoRight');

var _NotificationInfoRight2 = _interopRequireDefault(_NotificationInfoRight);

var _NotificationInfoLeft = require('./NotificationInfoLeft');

var _NotificationInfoLeft2 = _interopRequireDefault(_NotificationInfoLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Notification = function Notification(_ref) {
  var type = _ref.type,
      children = _ref.children,
      seen = _ref.seen,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['type', 'children', 'seen', 'className']);

  var classes = (0, _classnames2.default)({
    'drawer-pf-notification': type === 'notification',
    'drawer-pf-loading text-center': type === 'loading'
  }, { unread: !seen }, className);

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    type === 'loading' ? [_react2.default.createElement(_Spinner2.default, { key: 'notification_spinner', inline: true, loading: true, size: 'xs' }), ' Loading More'] : children
  );
};
Notification.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes2.default.node,
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** seen Notification Bool */
  seen: _propTypes2.default.bool,
  /** show Loading Notification */
  type: _propTypes2.default.string
};
Notification.defaultProps = {
  children: null,
  className: '',
  seen: false,
  type: 'notification'
};

Notification.Content = _NotificationContent2.default;
Notification.Info = _NotificationInfo2.default;
Notification.InfoRight = _NotificationInfoRight2.default;
Notification.InfoLeft = _NotificationInfoLeft2.default;
Notification.Message = _NotificationMessage2.default;

exports.default = Notification;