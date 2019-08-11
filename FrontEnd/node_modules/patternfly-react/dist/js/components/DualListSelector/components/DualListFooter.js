'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DualListCounter = require('./DualListCounter');

var _DualListCounter2 = _interopRequireDefault(_DualListCounter);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListFooter = function DualListFooter(_ref) {
  var items = _ref.items,
      selectCount = _ref.selectCount,
      getCounterMessage = _ref.getCounterMessage;
  return _react2.default.createElement(
    'div',
    { className: 'dual-list-pf-footer' },
    _react2.default.createElement(_DualListCounter2.default, { selected: selectCount, total: (0, _helpers.getItemsLength)(items), getCounterMessage: getCounterMessage })
  );
};

DualListFooter.propTypes = {
  /** Items array to get the length from. */
  items: _propTypes2.default.array,
  /** Amount of selected items in the selector. */
  selectCount: _propTypes2.default.number,
  /** Determines the counter message in the selector's footer,
   * receives the selected and total amounts of items.
   */
  getCounterMessage: _propTypes2.default.func
};

DualListFooter.defaultProps = {
  items: [],
  selectCount: 0,
  getCounterMessage: _helpers.getCounterMessage
};

exports.default = DualListFooter;