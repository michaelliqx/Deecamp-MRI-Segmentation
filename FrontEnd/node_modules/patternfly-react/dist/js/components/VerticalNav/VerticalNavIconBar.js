'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Nav = require('../Nav');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticalNavIconBar = function VerticalNavIconBar(props) {
  var iconBar = _react2.default.createElement(
    _Nav.Nav,
    { navbar: true, pullRight: true, className: 'navbar-iconic' },
    props.children
  );
  return props.collapse ? _react2.default.createElement(
    'nav',
    { className: 'collapse navbar-collapse' },
    iconBar
  ) : iconBar;
};

VerticalNavIconBar.propTypes = {
  /** Children to render inside .navbar-right */
  children: _propTypes2.default.node,
  /** Whether to also wrap the children in a .navbar-collapse */
  collapse: _propTypes2.default.bool
};

VerticalNavIconBar.defaultProps = {
  collapse: true,
  children: null
};

VerticalNavIconBar.displayName = 'VerticalNav.IconBar';

exports.default = VerticalNavIconBar;