var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import NotificationContent from './NotificationContent';
import NotificationInfo from './NotificationInfo';
import NotificationMessage from './NotificationMessage';
import NotificationInfoRight from './NotificationInfoRight';
import NotificationInfoLeft from './NotificationInfoLeft';

var Notification = function Notification(_ref) {
  var type = _ref.type,
      children = _ref.children,
      seen = _ref.seen,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['type', 'children', 'seen', 'className']);

  var classes = classNames({
    'drawer-pf-notification': type === 'notification',
    'drawer-pf-loading text-center': type === 'loading'
  }, { unread: !seen }, className);

  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    type === 'loading' ? [React.createElement(Spinner, { key: 'notification_spinner', inline: true, loading: true, size: 'xs' }), ' Loading More'] : children
  );
};
Notification.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node,
  /** Additional element css classes */
  className: PropTypes.string,
  /** seen Notification Bool */
  seen: PropTypes.bool,
  /** show Loading Notification */
  type: PropTypes.string
};
Notification.defaultProps = {
  children: null,
  className: '',
  seen: false,
  type: 'notification'
};

Notification.Content = NotificationContent;
Notification.Info = NotificationInfo;
Notification.InfoRight = NotificationInfoRight;
Notification.InfoLeft = NotificationInfoLeft;
Notification.Message = NotificationMessage;

export default Notification;