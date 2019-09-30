var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TABLE_ALIGN, TABLE_ALIGNMENT_TYPES } from './TableConstants';
/**
 * TableCell component for Patternfly React
 */
var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'align']);

  var classes = classNames({
    'text-right': align === TABLE_ALIGN.RIGHT,
    'text-center': align === TABLE_ALIGN.CENTER
  }, className);
  return React.createElement(
    'td',
    _extends({ className: classes }, props),
    children
  );
};
TableCell.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Cell alignment */
  align: PropTypes.oneOf(TABLE_ALIGNMENT_TYPES)
};
TableCell.defaultProps = {
  children: null,
  className: '',
  align: TABLE_ALIGN.DEFAULT
};
export default TableCell;