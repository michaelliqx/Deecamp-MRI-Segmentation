var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';
import MastheadCollapse from './MastheadCollapse';
import MastheadDropdown from './MastheadDropdown';

/**
 * Masthead
 */
var Masthead = function Masthead(_ref) {
  var className = _ref.className,
      title = _ref.title,
      titleImg = _ref.titleImg,
      iconImg = _ref.iconImg,
      href = _ref.href,
      onTitleClick = _ref.onTitleClick,
      navToggle = _ref.navToggle,
      onNavToggleClick = _ref.onNavToggleClick,
      middleContent = _ref.middleContent,
      thin = _ref.thin,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'title', 'titleImg', 'iconImg', 'href', 'onTitleClick', 'navToggle', 'onNavToggleClick', 'middleContent', 'thin', 'children']);

  var mastheadClasses = classNames({
    navbar: true,
    'navbar-default': thin,
    'navbar-pf': thin,
    'navbar-pf-vertical': !thin
  }, className);
  var handleTitleClick = function handleTitleClick(e) {
    if (onTitleClick !== noop) {
      if (e) {
        e.preventDefault();
      }
      onTitleClick();
    }
  };

  return React.createElement(
    'nav',
    _extends({ className: mastheadClasses }, props),
    React.createElement(
      'div',
      { className: 'navbar-header' },
      navToggle && React.createElement(
        'button',
        { className: 'navbar-toggle', onClick: onNavToggleClick },
        React.createElement(
          'span',
          { className: 'sr-only' },
          'Toggle navigation'
        ),
        React.createElement('span', { 'aria-hidden': 'true', className: 'icon-bar' }),
        React.createElement('span', { 'aria-hidden': 'true', className: 'icon-bar' }),
        React.createElement('span', { 'aria-hidden': 'true', className: 'icon-bar' })
      ),
      React.createElement(
        'a',
        { href: href, role: 'button', className: 'navbar-brand', onClick: handleTitleClick },
        iconImg && React.createElement('img', { className: 'navbar-brand-icon', src: iconImg, alt: '' }),
        titleImg && React.createElement('img', { className: 'navbar-brand-name', src: titleImg, alt: title }),
        !titleImg && title
      ),
      middleContent
    ),
    children
  );
};

Masthead.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Title of the application (use either this or titleImg) */
  title: PropTypes.string,
  /** URL of an image for the app's title (use either this or title) */
  titleImg: PropTypes.string,
  /** URL of an image for the app's icon */
  iconImg: PropTypes.string,
  /** URL of the application's homepage if the title should be a link */
  href: PropTypes.string,
  /** Alternative to href, callback to call when the brand link is clicked */
  onTitleClick: PropTypes.func,
  /** Option to have the nav toggle (hamburger), default is true */
  navToggle: PropTypes.bool,
  /** Option to have the fit nav, default is false */
  thin: PropTypes.bool,
  /** Callback when the nav toggle (hamburger) is clicked */
  onNavToggleClick: PropTypes.func,
  /** Content for the center area of the masthead (context selector) */
  middleContent: PropTypes.node,
  /** Children (typically MastheadCollapse) */
  children: PropTypes.node
};

Masthead.defaultProps = {
  className: '',
  title: '',
  titleImg: '',
  iconImg: '',
  href: '#',
  onTitleClick: noop,
  navToggle: true,
  thin: false,
  onNavToggleClick: noop,
  middleContent: null,
  children: null
};

Masthead.Collapse = MastheadCollapse;
Masthead.Dropdown = MastheadDropdown;

export default Masthead;