var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { getContext } from 'recompose';
import Navbar from 'react-bootstrap/es/Navbar';

import VerticalNavBrand from './VerticalNavBrand';
import { navContextTypes } from './VerticalNavConstants';
import { noop, hasDisplayName, filterChildren } from '../../common/helpers';

/**
 * VerticalNavMasthead - the first child of a VerticalNav component
 */
var BaseVerticalNavMasthead = function BaseVerticalNavMasthead(props) {
  var children = props.children,
      href = props.href,
      iconImg = props.iconImg,
      titleImg = props.titleImg,
      title = props.title;


  var brandChildren = filterChildren(children, function (child) {
    return hasDisplayName(child, VerticalNavBrand.displayName);
  });
  var otherChildren = filterChildren(children, function (child) {
    return !hasDisplayName(child, VerticalNavBrand.displayName);
  });

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Navbar.Header,
      null,
      React.createElement(
        Navbar.Toggle,
        { onClick: props.updateNavOnMenuToggleClick },
        React.createElement(
          'span',
          { className: 'sr-only' },
          'Toggle navigation'
        ),
        React.createElement('span', { className: 'icon-bar' }),
        React.createElement('span', { className: 'icon-bar' }),
        React.createElement('span', { className: 'icon-bar' })
      ),
      brandChildren && brandChildren.length > 0 ? brandChildren : React.createElement(VerticalNavBrand, { title: title, titleImg: titleImg, iconImg: iconImg, href: href })
    ),
    otherChildren
  );
};

BaseVerticalNavMasthead.propTypes = _extends({}, navContextTypes, {
  /** See VerticalNavBrand.propTypes */
  title: PropTypes.string,
  /** See VerticalNavBrand.propTypes */
  titleImg: PropTypes.string,
  /** See VerticalNavBrand.propTypes */
  iconImg: PropTypes.string,
  /** See VerticalNavBrand.propTypes */
  href: PropTypes.string,
  /** See VerticalNavBrand.propTypes */
  updateNavOnMenuToggleClick: PropTypes.func,
  /** If any non-Brand children are passed, they will be rendered after the .navbar-header */
  children: PropTypes.node
});
BaseVerticalNavMasthead.defaultProps = {
  title: '',
  titleImg: '',
  iconImg: '',
  href: '',
  updateNavOnMenuToggleClick: noop,
  children: null
};

var VerticalNavMasthead = getContext(navContextTypes)(BaseVerticalNavMasthead);

VerticalNavMasthead.propTypes = _extends({}, BaseVerticalNavMasthead.propTypes);

VerticalNavMasthead.displayName = 'VerticalNav.Masthead';

export default VerticalNavMasthead;