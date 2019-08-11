function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

/**
 * PaginationRowItems component for Patternfly React
 */
var PaginationRowItems = function PaginationRowItems(_ref) {
  var itemCount = _ref.itemCount,
      itemsStart = _ref.itemsStart,
      itemsEnd = _ref.itemsEnd,
      messagesOf = _ref.messagesOf,
      props = _objectWithoutProperties(_ref, ['itemCount', 'itemsStart', 'itemsEnd', 'messagesOf']);

  return React.createElement(
    'span',
    props,
    React.createElement(
      'span',
      { className: 'pagination-pf-items-current' },
      itemsStart,
      '-',
      itemsEnd
    ),
    '\xA0',
    messagesOf,
    '\xA0',
    React.createElement(
      'span',
      { className: 'pagination-pf-items-total' },
      itemCount
    )
  );
};
PaginationRowItems.propTypes = {
  /** calculated number of rows */
  itemCount: PropTypes.number.isRequired,
  /** calculated items start */
  itemsStart: PropTypes.number.isRequired,
  /** calculated items end */
  itemsEnd: PropTypes.number.isRequired,
  /** messages Of */
  messagesOf: PropTypes.string.isRequired
};
export default PaginationRowItems;