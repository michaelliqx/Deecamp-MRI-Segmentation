'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../index');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HorizontalNavMenu = function HorizontalNavMenu(props) {
  var children = props.children,
      twoLevels = props.twoLevels;

  var menuClasses = (0, _classnames2.default)({
    'persistent-secondary': twoLevels
  }, 'nav navbar-nav navbar-primary');
  return _react2.default.createElement(
    'div',
    { className: 'collapse navbar-collapse navbar-collapse-1' },
    _react2.default.createElement(
      _index.ListGroup,
      { componentClass: 'ul', bsClass: menuClasses },
      children
    )
  );
};

HorizontalNavMenu.propTypes = {
  children: _propTypes2.default.node,
  twoLevels: _propTypes2.default.bool
};

HorizontalNavMenu.defaultProps = {
  children: null,
  twoLevels: false
};

exports.default = HorizontalNavMenu;