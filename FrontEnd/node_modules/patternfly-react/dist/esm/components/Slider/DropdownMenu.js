import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { MenuItem } from '../MenuItem';

var DropdownMenu = function DropdownMenu(props) {
  var dropup = props.dropup,
      dropdownList = props.dropdownList,
      onFormatChange = props.onFormatChange,
      title = props.title;

  var menuItems = dropdownList.map(function (item, index) {
    return React.createElement(
      MenuItem,
      { bsClass: 'slider_menuitem', onClick: function onClick(event) {
          return onFormatChange(event.target.text);
        }, key: index, value: item },
      item
    );
  });

  return React.createElement(
    Dropdown,
    { id: 'slider_dropdown', dropup: dropup, pullRight: true },
    React.createElement(
      Dropdown.Toggle,
      null,
      React.createElement(
        'span',
        null,
        title || dropdownList[0]
      )
    ),
    React.createElement(
      Dropdown.Menu,
      null,
      menuItems
    )
  );
};

DropdownMenu.propTypes = {
  dropup: PropTypes.bool,
  dropdownList: PropTypes.array,
  onFormatChange: PropTypes.func,
  title: PropTypes.string
};

DropdownMenu.defaultProps = {
  dropup: false,
  dropdownList: null,
  onFormatChange: null,
  title: null
};

export default DropdownMenu;