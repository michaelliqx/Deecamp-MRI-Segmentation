import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewAdditionalInfo defines additional info section
 */
var ListViewAdditionalInfo = function ListViewAdditionalInfo(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    { className: 'list-view-pf-additional-info' },
    children
  );
};
ListViewAdditionalInfo.propTypes = {
  /** Child nodes - an array of ListViewInfoItem instances */
  children: PropTypes.arrayOf(PropTypes.node)
};
ListViewAdditionalInfo.defaultProps = {
  children: null
};

export default ListViewAdditionalInfo;