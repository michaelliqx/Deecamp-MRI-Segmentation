'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DualListItems = require('./DualListItems');

var _DualListItems2 = _interopRequireDefault(_DualListItems);

var _constants = require('../constants');

var _helpers = require('../helpers');

var _helpers2 = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListBody = function DualListBody(_ref) {
  var items = _ref.items,
      filterTerm = _ref.filterTerm,
      onItemChange = _ref.onItemChange,
      side = _ref.side,
      noItemsFoundMessage = _ref.noItemsFoundMessage,
      noItemsMessage = _ref.noItemsMessage;

  var listItems = void 0;
  if (items.length > 0) {
    listItems = _react2.default.createElement(_DualListItems2.default, { items: items, filterTerm: filterTerm, onChange: onItemChange, side: side });
    if ((0, _helpers.getFilterredItemsLength)(items) === 0) {
      listItems = _react2.default.createElement(
        'div',
        { className: 'dual-list-pf-no-items' },
        noItemsFoundMessage
      );
    }
  } else {
    listItems = _react2.default.createElement(
      'div',
      { className: 'dual-list-pf-no-items' },
      noItemsMessage
    );
  }
  return _react2.default.createElement(
    'div',
    { className: 'dual-list-pf-body' },
    listItems
  );
};

DualListBody.propTypes = {
  /** An array of items to create list items elements uppon */
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  })),
  /** The term which is flitering the list. */
  filterTerm: _propTypes2.default.string,
  /** A function that is running when the item selected state is toggled. */
  onItemChange: _propTypes2.default.func,
  /** The side of the selector. */
  side: _propTypes2.default.string,
  /** Sets the body's message when no items were found while filtering */
  noItemsFoundMessage: _propTypes2.default.string,
  /** Sets the body's message when there are no items at all */
  noItemsMessage: _propTypes2.default.string
};

DualListBody.defaultProps = {
  items: [],
  filterTerm: null,
  onItemChange: _helpers2.noop,
  side: null,
  noItemsFoundMessage: _constants.NO_ITEMS_FOUND,
  noItemsMessage: _constants.NO_ITEMS
};

exports.default = DualListBody;