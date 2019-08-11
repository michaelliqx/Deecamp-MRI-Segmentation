'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DualListItem = require('./DualListItem');

var _DualListItem2 = _interopRequireDefault(_DualListItem);

var _helpers = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListItems = function DualListItems(_ref) {
  var items = _ref.items,
      filterTerm = _ref.filterTerm,
      onChange = _ref.onChange,
      side = _ref.side;

  var menuItems = items.map(function (item, index) {
    var children = item.children;

    return _react2.default.createElement(
      _react2.default.Fragment,
      { key: 'fragment-' + index },
      _react2.default.createElement(_DualListItem2.default, _extends({
        className: children && 'parent'
      }, item, {
        key: 'item-' + index,
        filterTerm: filterTerm,
        onChange: onChange,
        side: side
      })),
      children && children.map(function (child, childIndex) {
        return _react2.default.createElement(_DualListItem2.default, _extends({
          className: 'child'
        }, child, {
          key: item.label + '-child' + childIndex,
          filterTerm: filterTerm,
          onChange: onChange,
          side: side
        }));
      })
    );
  });

  return menuItems;
};

DualListItems.propTypes = {
  /** An array of items to create list items elements uppon */
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
    children: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string,
      value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    }))
  })),
  /** The term which is flitering the list. */
  filterTerm: _propTypes2.default.string,
  /** A function that is running when the item selected state is toggled. */
  onChange: _propTypes2.default.func,
  /** The side of the selector. */
  side: _propTypes2.default.string
};

DualListItems.defaultProps = {
  items: [],
  filterTerm: null,
  onChange: _helpers.noop,
  side: null
};

exports.default = DualListItems;