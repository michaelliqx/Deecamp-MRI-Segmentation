'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListCounter = function DualListCounter(_ref) {
  var selected = _ref.selected,
      total = _ref.total,
      getCounterMessage = _ref.getCounterMessage;
  return _react2.default.createElement(
    'strong',
    null,
    getCounterMessage(selected, total)
  );
};

DualListCounter.propTypes = {
  /** The Amount of selected items in the selector */
  selected: _propTypes2.default.number,
  /** The Amount of total items in the selectror */
  total: _propTypes2.default.number,
  /** Determines the counter message in the selector's footer,
   * receives the selected and total amounts of items.
   */
  getCounterMessage: _propTypes2.default.func
};

DualListCounter.defaultProps = {
  selected: 0,
  total: 0,
  getCounterMessage: _helpers.getCounterMessage
};

exports.default = DualListCounter;