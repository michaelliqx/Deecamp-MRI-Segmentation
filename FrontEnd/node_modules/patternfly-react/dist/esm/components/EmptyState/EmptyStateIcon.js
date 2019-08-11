var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

/**
 * EmptyStateIcon renders element
 */
var EmptyStateIcon = function EmptyStateIcon(_ref) {
  var className = _ref.className,
      type = _ref.type,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ['className', 'type', 'name']);

  var classes = classNames('blank-slate-pf-icon', className);

  return React.createElement(
    'div',
    { className: classes },
    React.createElement(Icon, _extends({ type: type, name: name }, props))
  );
};
EmptyStateIcon.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Icon type (pf or fa) */
  type: PropTypes.string,
  /** Name of the icon font */
  name: PropTypes.string
};
EmptyStateIcon.defaultProps = {
  type: 'pf',
  name: 'add-circle-o',
  className: ''
};
export default EmptyStateIcon;