import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';

var TreeViewExpand = function TreeViewExpand(_ref) {
  var nodes = _ref.nodes,
      expanded = _ref.expanded,
      toggleExpand = _ref.toggleExpand;

  var hasChildren = nodes.length > 0;
  var classes = classNames('icon indent', { 'expand-icon fa fa-angle-right': hasChildren && !expanded }, { 'expand-icon fa fa-angle-down': hasChildren && expanded }, { glyphicon: !hasChildren });

  return React.createElement('span', { onClick: toggleExpand, className: classes, 'aria-hidden': true });
};

TreeViewExpand.propTypes = {
  nodes: PropTypes.array,
  expanded: PropTypes.bool,
  toggleExpand: PropTypes.func
};

TreeViewExpand.defaultProps = {
  nodes: [],
  expanded: false,
  toggleExpand: noop
};

export default TreeViewExpand;