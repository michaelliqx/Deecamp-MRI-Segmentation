var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from '../Button';
import { DropdownKebab } from '../DropdownKebab';

/**
 * TableDropdownKebab component for Patternfly React
 */
var TableDropdownKebab = function TableDropdownKebab(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var CustomButtonGroup = function CustomButtonGroup(buttonProps) {
    return React.createElement(ButtonGroup, _extends({}, buttonProps, { bsClass: ' ' }));
  };

  return React.createElement(
    DropdownKebab,
    _extends({ componentClass: CustomButtonGroup, toggleStyle: 'default' }, props),
    children
  );
};
TableDropdownKebab.propTypes = {
  /** children nodes */
  children: PropTypes.node
};
TableDropdownKebab.defaultProps = {
  children: null
};

export default TableDropdownKebab;