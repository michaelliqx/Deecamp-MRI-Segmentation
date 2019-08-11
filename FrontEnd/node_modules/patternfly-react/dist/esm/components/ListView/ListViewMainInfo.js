import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewMainInfo wraps the informational content of the ListViewItem
 */
var ListViewMainInfo = function ListViewMainInfo(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    { className: 'list-view-pf-main-info' },
    children
  );
};
ListViewMainInfo.propTypes = {
  /** Child nodes - instances of ListViewLeft and ListViewBody */
  children: PropTypes.node
};
ListViewMainInfo.defaultProps = {
  children: null
};
export default ListViewMainInfo;