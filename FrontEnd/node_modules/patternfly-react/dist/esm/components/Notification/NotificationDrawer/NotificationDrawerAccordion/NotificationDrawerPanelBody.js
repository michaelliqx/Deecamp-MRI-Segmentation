var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var NotificationDrawerPanelBody = function NotificationDrawerPanelBody(_ref) {
  var maxHeight = _ref.maxHeight,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['maxHeight', 'children', 'className']);

  var classes = classNames('panel-body', className);
  return React.createElement(
    'div',
    _extends({ className: classes, style: { maxHeight: maxHeight } }, props),
    children
  );
};
NotificationDrawerPanelBody.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Custom Height for Panel */
  maxHeight: PropTypes.number
};
NotificationDrawerPanelBody.defaultProps = {
  className: '',
  maxHeight: null
};

export default NotificationDrawerPanelBody;