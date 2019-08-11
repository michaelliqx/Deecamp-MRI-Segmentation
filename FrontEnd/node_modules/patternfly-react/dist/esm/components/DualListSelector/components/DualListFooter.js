import React from 'react';
import PropTypes from 'prop-types';
import DualListCounter from './DualListCounter';
import { getCounterMessage as counterMessage, getItemsLength } from '../helpers';

var DualListFooter = function DualListFooter(_ref) {
  var items = _ref.items,
      selectCount = _ref.selectCount,
      getCounterMessage = _ref.getCounterMessage;
  return React.createElement(
    'div',
    { className: 'dual-list-pf-footer' },
    React.createElement(DualListCounter, { selected: selectCount, total: getItemsLength(items), getCounterMessage: getCounterMessage })
  );
};

DualListFooter.propTypes = {
  /** Items array to get the length from. */
  items: PropTypes.array,
  /** Amount of selected items in the selector. */
  selectCount: PropTypes.number,
  /** Determines the counter message in the selector's footer,
   * receives the selected and total amounts of items.
   */
  getCounterMessage: PropTypes.func
};

DualListFooter.defaultProps = {
  items: [],
  selectCount: 0,
  getCounterMessage: counterMessage
};

export default DualListFooter;