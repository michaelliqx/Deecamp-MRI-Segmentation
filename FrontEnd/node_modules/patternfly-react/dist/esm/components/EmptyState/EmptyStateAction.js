var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmptyStateAction renders contents of the element
 */
var EmptyStateAction = function EmptyStateAction(_ref) {
  var children = _ref.children,
      className = _ref.className,
      secondary = _ref.secondary,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'secondary']);

  var classes = classNames({
    'blank-slate-pf-main-action': !secondary,
    'blank-slate-pf-secondary-action': secondary
  }, className);

  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};
EmptyStateAction.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Turn on secondary container styling */
  secondary: PropTypes.bool
};
EmptyStateAction.defaultProps = {
  className: '',
  secondary: false
};
export default EmptyStateAction;