var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var NotificationDrawer = function NotificationDrawer(_ref) {
  var hide = _ref.hide,
      expanded = _ref.expanded,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['hide', 'expanded', 'children', 'className']);

  var classes = classNames('drawer-pf drawer-alt-pf drawer-pf-notifications', { 'drawer-pf-expanded': expanded }, { hide: hide }, className);
  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};
NotificationDrawer.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Expanded bool */
  expanded: PropTypes.bool,
  /** Hide Bool */
  hide: PropTypes.bool
};
NotificationDrawer.defaultProps = {
  className: '',
  expanded: false,
  hide: false
};

export default NotificationDrawer;