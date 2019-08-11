var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var CardLink = function CardLink(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ['disabled', 'children', 'className', 'icon']);

  var classes = classNames({
    'card-pf-link-with-icon': icon,
    disabled: disabled
  }, className);

  return React.createElement(
    'p',
    null,
    React.createElement(
      'a',
      _extends({ className: classes }, props),
      icon,
      children
    )
  );
};
CardLink.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** card link icon node */
  icon: PropTypes.node,
  /** href prop */
  href: PropTypes.string,
  /** is link prop */
  disabled: PropTypes.bool
};
CardLink.defaultProps = {
  className: '',
  icon: null,
  href: null,
  disabled: false
};
export default CardLink;