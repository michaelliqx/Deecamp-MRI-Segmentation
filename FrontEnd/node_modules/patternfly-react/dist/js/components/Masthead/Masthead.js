'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../../common/helpers');

var _MastheadCollapse = require('./MastheadCollapse');

var _MastheadCollapse2 = _interopRequireDefault(_MastheadCollapse);

var _MastheadDropdown = require('./MastheadDropdown');

var _MastheadDropdown2 = _interopRequireDefault(_MastheadDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  var mastheadClasses = (0, _classnames2.default)({
    navbar: true,
    'navbar-default': thin,
    'navbar-pf': thin,
    'navbar-pf-vertical': !thin
  }, className);
  var handleTitleClick = function handleTitleClick(e) {
    if (onTitleClick !== _helpers.noop) {
      if (e) {
        e.preventDefault();
      }
      onTitleClick();
    }
  };

  return _react2.default.createElement(
    'nav',
    _extends({ className: mastheadClasses }, props),
    _react2.default.createElement(
      'div',
      { className: 'navbar-header' },
      navToggle && _react2.default.createElement(
        'button',
        { className: 'navbar-toggle', onClick: onNavToggleClick },
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Toggle navigation'
        ),
        _react2.default.createElement('span', { 'aria-hidden': 'true', className: 'icon-bar' }),
        _react2.default.createElement('span', { 'aria-hidden': 'true', className: 'icon-bar' }),
        _react2.default.createElement('span', { 'aria-hidden': 'true', className: 'icon-bar' })
      ),
      _react2.default.createElement(
        'a',
        { href: href, role: 'button', className: 'navbar-brand', onClick: handleTitleClick },
        iconImg && _react2.default.createElement('img', { className: 'navbar-brand-icon', src: iconImg, alt: '' }),
        titleImg && _react2.default.createElement('img', { className: 'navbar-brand-name', src: titleImg, alt: title }),
        !titleImg && title
      ),
      middleContent
    ),
    children
  );
};

Masthead.propTypes = {
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** Title of the application (use either this or titleImg) */
  title: _propTypes2.default.string,
  /** URL of an image for the app's title (use either this or title) */
  titleImg: _propTypes2.default.string,
  /** URL of an image for the app's icon */
  iconImg: _propTypes2.default.string,
  /** URL of the application's homepage if the title should be a link */
  href: _propTypes2.default.string,
  /** Alternative to href, callback to call when the brand link is clicked */
  onTitleClick: _propTypes2.default.func,
  /** Option to have the nav toggle (hamburger), default is true */
  navToggle: _propTypes2.default.bool,
  /** Option to have the fit nav, default is false */
  thin: _propTypes2.default.bool,
  /** Callback when the nav toggle (hamburger) is clicked */
  onNavToggleClick: _propTypes2.default.func,
  /** Content for the center area of the masthead (context selector) */
  middleContent: _propTypes2.default.node,
  /** Children (typically MastheadCollapse) */
  children: _propTypes2.default.node
};

Masthead.defaultProps = {
  className: '',
  title: '',
  titleImg: '',
  iconImg: '',
  href: '#',
  onTitleClick: _helpers.noop,
  navToggle: true,
  thin: false,
  onNavToggleClick: _helpers.noop,
  middleContent: null,
  children: null
};

Masthead.Collapse = _MastheadCollapse2.default;
Masthead.Dropdown = _MastheadDropdown2.default;

exports.default = Masthead;