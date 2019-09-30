function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

/**
 * PaginationRowAmountOfPages component for Patternfly React
 */
var PaginationRowAmountOfPages = function PaginationRowAmountOfPages(_ref) {
  var messagesOf = _ref.messagesOf,
      amountOfPages = _ref.amountOfPages,
      props = _objectWithoutProperties(_ref, ['messagesOf', 'amountOfPages']);

  return React.createElement(
    'span',
    props,
    '\xA0',
    messagesOf,
    '\xA0',
    React.createElement(
      'span',
      { className: 'pagination-pf-pages' },
      amountOfPages
    )
  );
};
PaginationRowAmountOfPages.propTypes = {
  /** messages of */
  messagesOf: PropTypes.string.isRequired,
  /** calculated amount of pages */
  amountOfPages: PropTypes.number.isRequired
};
export default PaginationRowAmountOfPages;