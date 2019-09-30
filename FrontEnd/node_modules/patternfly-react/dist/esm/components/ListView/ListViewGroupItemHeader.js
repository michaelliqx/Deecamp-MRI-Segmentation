import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewGroupItemHeader is used with expandable ListViewItem, wraps everything
 * that is displayed in non expanded state. Handles the toggling of the expanded
 * state
 */
var ListViewGroupItemHeader = function ListViewGroupItemHeader(_ref) {
  var children = _ref.children,
      toggleExpanded = _ref.toggleExpanded;

  var handleClick = function handleClick(e) {
    // ignore selected child elements click
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A' && e.target.tagName !== 'INPUT' && !e.target.classList.contains('fa-ellipsis-v')) {
      toggleExpanded();
    }
  };
  return React.createElement(
    'div',
    { className: 'list-group-item-header', onClick: handleClick },
    children
  );
};
ListViewGroupItemHeader.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Function to execute to trigger toggle */
  toggleExpanded: PropTypes.func.isRequired
};
ListViewGroupItemHeader.defaultProps = {
  children: null
};
export default ListViewGroupItemHeader;