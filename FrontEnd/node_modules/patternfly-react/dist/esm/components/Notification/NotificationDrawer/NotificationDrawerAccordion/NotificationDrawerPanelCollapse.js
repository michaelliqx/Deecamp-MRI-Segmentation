var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var NotificationDrawerPanelCollapse = function NotificationDrawerPanelCollapse(_ref) {
  var children = _ref.children,
      collapseIn = _ref.collapseIn,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'collapseIn', 'className']);

  var classes = classNames('panel-collapse', { 'collapse in': collapseIn }, className);

  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};
NotificationDrawerPanelCollapse.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** collapse in bool */
  collapseIn: PropTypes.bool
};
NotificationDrawerPanelCollapse.defaultProps = {
  className: '',
  collapseIn: false
};

export default NotificationDrawerPanelCollapse;