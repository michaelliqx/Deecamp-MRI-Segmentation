'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dropdown = require('../Dropdown');

var _MenuItem = require('../MenuItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownMenu = function DropdownMenu(props) {
  var dropup = props.dropup,
      dropdownList = props.dropdownList,
      onFormatChange = props.onFormatChange,
      title = props.title;

  var menuItems = dropdownList.map(function (item, index) {
    return _react2.default.createElement(
      _MenuItem.MenuItem,
      { bsClass: 'slider_menuitem', onClick: function onClick(event) {
          return onFormatChange(event.target.text);
        }, key: index, value: item },
      item
    );
  });

  return _react2.default.createElement(
    _Dropdown.Dropdown,
    { id: 'slider_dropdown', dropup: dropup, pullRight: true },
    _react2.default.createElement(
      _Dropdown.Dropdown.Toggle,
      null,
      _react2.default.createElement(
        'span',
        null,
        title || dropdownList[0]
      )
    ),
    _react2.default.createElement(
      _Dropdown.Dropdown.Menu,
      null,
      menuItems
    )
  );
};

DropdownMenu.propTypes = {
  dropup: _propTypes2.default.bool,
  dropdownList: _propTypes2.default.array,
  onFormatChange: _propTypes2.default.func,
  title: _propTypes2.default.string
};

DropdownMenu.defaultProps = {
  dropup: false,
  dropdownList: null,
  onFormatChange: null,
  title: null
};

exports.default = DropdownMenu;