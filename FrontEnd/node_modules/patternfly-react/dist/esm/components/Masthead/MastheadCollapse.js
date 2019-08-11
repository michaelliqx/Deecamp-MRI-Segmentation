var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Masthead
 */
var MastheadCollapse = function MastheadCollapse(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var menusClasses = classNames('collapse', 'navbar-collapse', className);

  return React.createElement(
    'nav',
    _extends({ className: menusClasses }, props),
    React.createElement(
      'ul',
      { className: 'nav navbar-nav navbar-right navbar-iconic navbar-utility' },
      children
    )
  );
};

MastheadCollapse.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Children (likely MastheadDropdown's) */
  children: PropTypes.node
};

MastheadCollapse.defaultProps = {
  className: '',
  children: null
};

export default MastheadCollapse;