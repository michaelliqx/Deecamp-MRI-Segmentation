var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewGroupItem is a root node of each ListViewItem
 */
var ListViewGroupItem = function ListViewGroupItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stacked = _ref.stacked,
      expanded = _ref.expanded,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'stacked', 'expanded']);

  var classes = classNames('list-group-item', {
    'list-view-pf-expand-active': expanded,
    'list-view-pf-stacked': stacked
  }, className);
  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};
ListViewGroupItem.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Toggles the item expanded */
  expanded: PropTypes.bool,
  /** Toggles the item stacked */
  stacked: PropTypes.bool
};
ListViewGroupItem.defaultProps = {
  children: null,
  expanded: false,
  stacked: false,
  className: ''
};
export default ListViewGroupItem;