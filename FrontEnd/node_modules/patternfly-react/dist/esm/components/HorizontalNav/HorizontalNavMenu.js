import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from '../../index';
import classNames from 'classnames';

var HorizontalNavMenu = function HorizontalNavMenu(props) {
  var children = props.children,
      twoLevels = props.twoLevels;

  var menuClasses = classNames({
    'persistent-secondary': twoLevels
  }, 'nav navbar-nav navbar-primary');
  return React.createElement(
    'div',
    { className: 'collapse navbar-collapse navbar-collapse-1' },
    React.createElement(
      ListGroup,
      { componentClass: 'ul', bsClass: menuClasses },
      children
    )
  );
};

HorizontalNavMenu.propTypes = {
  children: PropTypes.node,
  twoLevels: PropTypes.bool
};

HorizontalNavMenu.defaultProps = {
  children: null,
  twoLevels: false
};

export default HorizontalNavMenu;