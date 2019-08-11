var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmptyStateTitle renders contents of the element
 */
var EmptyStateTitle = function EmptyStateTitle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = classNames('h1', 'blank-slate-pf-title', className);
  return React.createElement(
    'h4',
    _extends({ className: classes }, props),
    children
  );
};
EmptyStateTitle.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
EmptyStateTitle.defaultProps = {
  className: ''
};
export default EmptyStateTitle;