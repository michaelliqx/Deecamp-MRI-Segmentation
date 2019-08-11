var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../Icon';

var NotificationDrawerTitle = function NotificationDrawerTitle(_ref) {
  var expandable = _ref.expandable,
      onCloseClick = _ref.onCloseClick,
      onExpandClick = _ref.onExpandClick,
      title = _ref.title,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['expandable', 'onCloseClick', 'onExpandClick', 'title', 'children', 'className']);

  var classes = classNames('drawer-pf-title', className);

  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    expandable && React.createElement('a', { className: 'drawer-pf-toggle-expand', onClick: onExpandClick }),
    React.createElement(
      'a',
      { className: 'drawer-pf-close', onClick: onCloseClick },
      React.createElement(Icon, { name: 'close' })
    ),
    React.createElement(
      'h3',
      { className: 'text-center' },
      title
    ),
    children
  );
};

NotificationDrawerTitle.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Title prop */
  title: PropTypes.string,
  /** Close/Expand Functions */
  onCloseClick: PropTypes.func,
  onExpandClick: PropTypes.func,
  /** is the Drawer expandable prop */
  expandable: PropTypes.bool
};
NotificationDrawerTitle.defaultProps = {
  className: '',
  title: 'Notifications',
  onCloseClick: null,
  onExpandClick: null,
  children: null,
  expandable: true
};

export default NotificationDrawerTitle;