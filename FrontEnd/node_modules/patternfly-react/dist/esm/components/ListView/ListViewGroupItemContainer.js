import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';

/**
 * ListViewGroupItemContainer is used with expandable ListViewItem, wraps the
 * expanded content
 */
var ListViewGroupItemContainer = function ListViewGroupItemContainer(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      onClose = _ref.onClose;

  var classes = classNames({
    'list-group-item-container container-fluid': true,
    hidden: !expanded
  });
  return React.createElement(
    'div',
    { className: classes },
    onClose !== noop && React.createElement(
      'div',
      { className: 'close' },
      React.createElement('span', { className: 'pficon pficon-close', onClick: onClose })
    ),
    expanded && children
  );
};
ListViewGroupItemContainer.propTypes = {
  /** Children nodes - the content visible in expanded state */
  children: PropTypes.node,
  /** Boolean indicating whether expandable content is visible */
  expanded: PropTypes.bool,
  /** Function to call when 'close icon' is clicked */
  onClose: PropTypes.func
};
ListViewGroupItemContainer.defaultProps = {
  children: null,
  onClose: noop,
  expanded: false
};
export default ListViewGroupItemContainer;