var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TABLE_ALIGN, TABLE_ALIGNMENT_TYPES, TABLE_SORT_DIRECTION, TABLE_SORT_DIRECTIONS } from './TableConstants';

/**
 * TableHeading component for Patternfly React
 */
var TableHeading = function TableHeading(_ref) {
  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      sort = _ref.sort,
      sortDirection = _ref.sortDirection,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'align', 'sort', 'sortDirection']);

  var sortingClass = classNames({
    sorting_asc: sortDirection === TABLE_SORT_DIRECTION.ASC,
    sorting_desc: sortDirection === TABLE_SORT_DIRECTION.DESC
  });
  var classes = classNames({
    'text-right': align === TABLE_ALIGN.RIGHT,
    'text-center': align === TABLE_ALIGN.CENTER
  }, sort ? sortingClass || 'sorting' : '', className);
  return React.createElement(
    'th',
    _extends({ className: classes }, props),
    children
  );
};
TableHeading.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Heading alignment */
  align: PropTypes.oneOf(TABLE_ALIGNMENT_TYPES),
  /** sortable heading */
  sort: PropTypes.bool,
  /** sort direction */
  sortDirection: PropTypes.oneOf(TABLE_SORT_DIRECTIONS)
};
TableHeading.defaultProps = {
  children: null,
  className: '',
  sort: false,
  align: TABLE_ALIGN.DEFAULT,
  sortDirection: TABLE_SORT_DIRECTION.DEFAULT
};
export default TableHeading;