import React from 'react';
import PropTypes from 'prop-types';

/**
 * Custom Masthead Dropdown
 */
var CustomMastheadDropdown = function CustomMastheadDropdown(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement(
    'li',
    { className: className },
    children
  );
};

CustomMastheadDropdown.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Children elements */
  children: PropTypes.node
};

CustomMastheadDropdown.defaultProps = {
  className: '',
  children: null
};

export default CustomMastheadDropdown;