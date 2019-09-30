import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewDescriptionHeading renders ListViewItem heading
 */
var ListViewDescriptionHeading = function ListViewDescriptionHeading(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    { className: 'list-group-item-heading' },
    children
  );
};
ListViewDescriptionHeading.propTypes = {
  /** Child node - content rendered as heading */
  children: PropTypes.node
};
ListViewDescriptionHeading.defaultProps = {
  children: null
};
export default ListViewDescriptionHeading;