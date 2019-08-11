var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';
import BsLabel from 'react-bootstrap/es/Label';

import Label from './Label';

var DisposableLabel = function DisposableLabel(props) {
  return React.createElement(Label, props);
};

// WARNING: This should be kept consistent with Label.propTypes
DisposableLabel.propTypes = _extends({}, BsLabel.propTypes, {
  /** Children nodes */
  children: PropTypes.node,
  /** Label type */
  type: PropTypes.string,
  /** callback when Label is removed  */
  onRemoveClick: PropTypes.func
});

// WARNING: This should be kept consistent with Label.defaultProps
DisposableLabel.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: noop
};

export default DisposableLabel;