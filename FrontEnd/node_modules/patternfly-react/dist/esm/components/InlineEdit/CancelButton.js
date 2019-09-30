var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';

var CancelButton = function CancelButton(props) {
  return React.createElement(
    Button,
    props,
    React.createElement(Icon, { type: 'pf', name: 'close' })
  );
};

CancelButton.propTypes = _extends({}, Button.propTypes);

export default CancelButton;