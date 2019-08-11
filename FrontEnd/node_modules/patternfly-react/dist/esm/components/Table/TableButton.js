var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../Button';
import { BUTTON_BS_STYLES } from '../Button/ButtonConstants';
import { noop } from '../../common/helpers';

/**
 * TableButton component for Patternfly React
 */
var TableButton = function TableButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'onClick']);

  var classes = classNames('table-view-pf-btn', className);

  var bsStyle = props.bsStyle,
      otherProps = _objectWithoutProperties(props, ['bsStyle']);

  return React.createElement(
    'div',
    _extends({ className: classes }, otherProps),
    React.createElement(
      Button,
      { onClick: onClick, bsStyle: bsStyle },
      children
    )
  );
};
TableButton.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** onClick callback for button */
  onClick: PropTypes.func,
  bsStyle: PropTypes.oneOf(BUTTON_BS_STYLES)
};
TableButton.defaultProps = {
  children: null,
  className: '',
  onClick: noop,
  bsStyle: 'default'
};
TableButton.BUTTON_BS_STYLES = BUTTON_BS_STYLES;

export default TableButton;