var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { getClassName, getIconName, warnIfDeprecatedType } from './helpers';
import { ALERT_TYPES, DEPRECATED_ALERT_TYPES, ALERT_TYPE_ERROR } from './AlertConstants';

/**
 * Alert Component for Patternfly React
 */
var Alert = function Alert(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onDismiss = _ref.onDismiss,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'onDismiss', 'type']);

  warnIfDeprecatedType(type);

  var alertClass = classNames('alert', className, getClassName(type), {
    'alert-dismissable': onDismiss
  });

  var iconName = getIconName(type);

  return React.createElement(
    'div',
    _extends({ className: alertClass }, props),
    onDismiss && React.createElement(
      Button,
      { bsClass: 'close', 'aria-hidden': 'true', onClick: onDismiss },
      React.createElement(Icon, { type: 'pf', name: 'close' })
    ),
    React.createElement(Icon, { type: 'pf', name: iconName }),
    children
  );
};
Alert.propTypes = {
  /** additional alert classes */
  className: PropTypes.string,
  /** callback when alert is dismissed  */
  onDismiss: PropTypes.func,
  /** the type of alert  */
  type: PropTypes.oneOf([].concat(_toConsumableArray(ALERT_TYPES), _toConsumableArray(DEPRECATED_ALERT_TYPES))),
  /** children nodes  */
  children: PropTypes.node
};
Alert.defaultProps = {
  className: '',
  onDismiss: null, // we do not want to default noop b/c of conditional dismiss button
  type: ALERT_TYPE_ERROR,
  children: null
};
Alert.ALERT_TYPES = ALERT_TYPES;

export default Alert;