var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import EmptyStateIcon from './EmptyStateIcon';
import EmptyStateTitle from './EmptyStateTitle';
import EmptyStateInfo from './EmptyStateInfo';
import EmptyStateHelp from './EmptyStateHelp';
import EmptyStateAction from './EmptyStateAction';

/**
 * Empty State Component for Patternfly React
 */
var EmptyState = function EmptyState(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = classNames('blank-slate-pf', className);

  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};
EmptyState.propTypes = {
  /** Child nodes */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
EmptyState.defaultProps = {
  className: ''
};

EmptyState.Title = EmptyStateTitle;
EmptyState.Icon = EmptyStateIcon;
EmptyState.Info = EmptyStateInfo;
EmptyState.Help = EmptyStateHelp;
EmptyState.Action = EmptyStateAction;

export default EmptyState;