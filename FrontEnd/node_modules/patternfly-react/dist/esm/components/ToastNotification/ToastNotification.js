var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import { Alert } from '../Alert';
import { default as TimedToastNotification } from './TimedToastNotification';
import { default as ToastNotificationList } from './ToastNotificationList';

/**
 * ToastNotification Component for Patternfly React
 */
var ToastNotification = function ToastNotification(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var notificationClasses = classNames('toast-pf', className);

  return React.createElement(
    Alert,
    _extends({ className: notificationClasses }, props),
    children
  );
};

// WARNING: If you change propTypes OR defaultProps  you MUST also change TimedToastNotification
ToastNotification.propTypes = _extends({}, Alert.propTypes);
ToastNotification.defaultProps = _extends({}, Alert.defaultProps);

// WARNING: If you change TOAST_NOTIFICATION_TYPES you MUST also change TimedToastNotification
ToastNotification.TOAST_NOTIFICATION_TYPES = [].concat(_toConsumableArray(Alert.ALERT_TYPES));
ToastNotification.Timed = TimedToastNotification;
ToastNotification.List = ToastNotificationList;

export default ToastNotification;