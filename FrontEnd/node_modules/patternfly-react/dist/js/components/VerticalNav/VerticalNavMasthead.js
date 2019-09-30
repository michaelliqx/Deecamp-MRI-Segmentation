'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _Navbar = require('react-bootstrap/lib/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _VerticalNavBrand = require('./VerticalNavBrand');

var _VerticalNavBrand2 = _interopRequireDefault(_VerticalNavBrand);

var _VerticalNavConstants = require('./VerticalNavConstants');

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * VerticalNavMasthead - the first child of a VerticalNav component
 */
var BaseVerticalNavMasthead = function BaseVerticalNavMasthead(props) {
  var children = props.children,
      href = props.href,
      iconImg = props.iconImg,
      titleImg = props.titleImg,
      title = props.title;


  var brandChildren = (0, _helpers.filterChildren)(children, function (child) {
    return (0, _helpers.hasDisplayName)(child, _VerticalNavBrand2.default.displayName);
  });
  var otherChildren = (0, _helpers.filterChildren)(children, function (child) {
    return !(0, _helpers.hasDisplayName)(child, _VerticalNavBrand2.default.displayName);
  });

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _Navbar2.default.Header,
      null,
      _react2.default.createElement(
        _Navbar2.default.Toggle,
        { onClick: props.updateNavOnMenuToggleClick },
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Toggle navigation'
        ),
        _react2.default.createElement('span', { className: 'icon-bar' }),
        _react2.default.createElement('span', { className: 'icon-bar' }),
        _react2.default.createElement('span', { className: 'icon-bar' })
      ),
      brandChildren && brandChildren.length > 0 ? brandChildren : _react2.default.createElement(_VerticalNavBrand2.default, { title: title, titleImg: titleImg, iconImg: iconImg, href: href })
    ),
    otherChildren
  );
};

BaseVerticalNavMasthead.propTypes = _extends({}, _VerticalNavConstants.navContextTypes, {
  /** See VerticalNavBrand.propTypes */
  title: _propTypes2.default.string,
  /** See VerticalNavBrand.propTypes */
  titleImg: _propTypes2.default.string,
  /** See VerticalNavBrand.propTypes */
  iconImg: _propTypes2.default.string,
  /** See VerticalNavBrand.propTypes */
  href: _propTypes2.default.string,
  /** See VerticalNavBrand.propTypes */
  updateNavOnMenuToggleClick: _propTypes2.default.func,
  /** If any non-Brand children are passed, they will be rendered after the .navbar-header */
  children: _propTypes2.default.node
});
BaseVerticalNavMasthead.defaultProps = {
  title: '',
  titleImg: '',
  iconImg: '',
  href: '',
  updateNavOnMenuToggleClick: _helpers.noop,
  children: null
};

var VerticalNavMasthead = (0, _recompose.getContext)(_VerticalNavConstants.navContextTypes)(BaseVerticalNavMasthead);

VerticalNavMasthead.propTypes = _extends({}, BaseVerticalNavMasthead.propTypes);

VerticalNavMasthead.displayName = 'VerticalNav.Masthead';

exports.default = VerticalNavMasthead;