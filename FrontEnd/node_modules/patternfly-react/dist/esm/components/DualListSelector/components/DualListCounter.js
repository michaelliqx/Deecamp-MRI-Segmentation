import React from 'react';
import PropTypes from 'prop-types';
import { getCounterMessage as counterMessage } from '../helpers';

var DualListCounter = function DualListCounter(_ref) {
  var selected = _ref.selected,
      total = _ref.total,
      getCounterMessage = _ref.getCounterMessage;
  return React.createElement(
    'strong',
    null,
    getCounterMessage(selected, total)
  );
};

DualListCounter.propTypes = {
  /** The Amount of selected items in the selector */
  selected: PropTypes.number,
  /** The Amount of total items in the selectror */
  total: PropTypes.number,
  /** Determines the counter message in the selector's footer,
   * receives the selected and total amounts of items.
   */
  getCounterMessage: PropTypes.func
};

DualListCounter.defaultProps = {
  selected: 0,
  total: 0,
  getCounterMessage: counterMessage
};

export default DualListCounter;