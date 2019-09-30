var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';

var SortDirectionSelector = function SortDirectionSelector(_ref) {
  var className = _ref.className,
      isNumeric = _ref.isNumeric,
      isAscending = _ref.isAscending,
      props = _objectWithoutProperties(_ref, ['className', 'isNumeric', 'isAscending']);

  var directionName = void 0;
  if (isNumeric) {
    directionName = isAscending ? 'sort-numeric-asc' : 'sort-numeric-desc';
  } else {
    directionName = isAscending ? 'sort-alpha-asc' : 'sort-alpha-desc';
  }

  return React.createElement(
    Button,
    _extends({ bsStyle: 'link', className: className }, props),
    React.createElement(Icon, { type: 'fa', className: 'sort-direction', name: directionName })
  );
};

SortDirectionSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Boolean if current sort type is numeric */
  isNumeric: PropTypes.bool,
  /** Boolean if current sort direction is ascending */
  isAscending: PropTypes.bool
};

SortDirectionSelector.defaultProps = {
  className: '',
  isNumeric: true,
  isAscending: true
};
export default SortDirectionSelector;