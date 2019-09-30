var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import BsDropdownButton from 'react-bootstrap/es/DropdownButton';

import { BUTTON_BS_STYLES } from './ButtonConstants';

var DropdownButton = function DropdownButton(props) {
  return React.createElement(BsDropdownButton, props);
};

DropdownButton.propTypes = _extends({}, BsDropdownButton.propTypes, {
  // eslint-disable-next-line react/require-default-props
  bsStyle: PropTypes.oneOf(BUTTON_BS_STYLES)
});

DropdownButton.BUTTON_BS_STYLES = BUTTON_BS_STYLES;

export default DropdownButton;