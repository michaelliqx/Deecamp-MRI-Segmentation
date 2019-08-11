import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewExpand renders the caret which signifies that row is expandable.
 * The caret icon points to the right when it is closed and down when it is expanded.
 */
var ListViewExpand = function ListViewExpand(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      toggleExpanded = _ref.toggleExpanded;

  var classes = classNames({
    'fa fa-angle-right': true,
    'fa-angle-down': expanded
  });
  return React.createElement(
    'div',
    {
      className: classNames('list-view-pf-expand', { active: expanded }),
      onClick: function onClick(e) {
        e.stopPropagation();
        toggleExpanded();
      }
    },
    React.createElement('span', { className: classes }),
    children
  );
};
ListViewExpand.propTypes = {
  /** Child nodes which render additional content - used in expandable ListViewInfoItem */
  children: PropTypes.node,
  /** Expanded state toggle */
  expanded: PropTypes.bool,
  /** Function to execute to trigger toggle */
  toggleExpanded: PropTypes.func.isRequired
};
ListViewExpand.defaultProps = {
  children: null,
  expanded: false
};
export default ListViewExpand;