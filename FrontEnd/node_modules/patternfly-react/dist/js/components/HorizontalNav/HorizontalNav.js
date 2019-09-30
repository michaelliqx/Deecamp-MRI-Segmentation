'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HorizontalNavMenu = require('./HorizontalNavMenu');

var _HorizontalNavMenu2 = _interopRequireDefault(_HorizontalNavMenu);

var _HorizontalNavMenuItem = require('./HorizontalNavMenuItem');

var _HorizontalNavMenuItem2 = _interopRequireDefault(_HorizontalNavMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HorizontalNav = function HorizontalNav(props) {
  var children = props.children;


  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-default navbar-pf' },
    children
  );
};

HorizontalNav.propTypes = {
  children: _propTypes2.default.node
};

HorizontalNav.defaultProps = {
  children: null
};

HorizontalNav.Menu = _HorizontalNavMenu2.default;
HorizontalNav.MenuItem = _HorizontalNavMenuItem2.default;

exports.default = HorizontalNav;