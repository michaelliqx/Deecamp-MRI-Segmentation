import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewDescription wraps Heading and Text
 */
var ListViewDescription = function ListViewDescription(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    { className: 'list-view-pf-description' },
    children
  );
};
ListViewDescription.propTypes = {
  /** Child nodes - ListViewDescriptionHeading or ListViewDescriptionText instances */
  children: PropTypes.node
};
ListViewDescription.defaultProps = {
  children: null
};
export default ListViewDescription;