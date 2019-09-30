import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from '../Nav';

var VerticalNavIconBar = function VerticalNavIconBar(props) {
  var iconBar = React.createElement(
    Nav,
    { navbar: true, pullRight: true, className: 'navbar-iconic' },
    props.children
  );
  return props.collapse ? React.createElement(
    'nav',
    { className: 'collapse navbar-collapse' },
    iconBar
  ) : iconBar;
};

VerticalNavIconBar.propTypes = {
  /** Children to render inside .navbar-right */
  children: PropTypes.node,
  /** Whether to also wrap the children in a .navbar-collapse */
  collapse: PropTypes.bool
};

VerticalNavIconBar.defaultProps = {
  collapse: true,
  children: null
};

VerticalNavIconBar.displayName = 'VerticalNav.IconBar';

export default VerticalNavIconBar;