var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import BsSplitButton from 'react-bootstrap/es/SplitButton';

import { BUTTON_BS_STYLES } from './ButtonConstants';

var SplitButton = function SplitButton(props) {
  return React.createElement(BsSplitButton, props);
};

SplitButton.propTypes = _extends({}, BsSplitButton.propTypes, {
  // eslint-disable-next-line react/require-default-props
  bsStyle: PropTypes.oneOf(BUTTON_BS_STYLES)
});

SplitButton.BUTTON_BS_STYLES = BUTTON_BS_STYLES;

export default SplitButton;