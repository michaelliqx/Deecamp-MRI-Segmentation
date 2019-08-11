'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../Button');

var _MenuItem = require('../MenuItem');

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SortTypeSelector = function SortTypeSelector(_ref) {
  var className = _ref.className,
      id = _ref.id,
      sortTypes = _ref.sortTypes,
      currentSortType = _ref.currentSortType,
      onSortTypeSelected = _ref.onSortTypeSelected,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'sortTypes', 'currentSortType', 'onSortTypeSelected']);

  var menuId = 'sortTypeMenu';
  menuId += id ? '_' + id : '';
  if (sortTypes && sortTypes.length > 1) {
    var title = void 0;
    if (currentSortType) {
      title = currentSortType.title || currentSortType;
    } else {
      title = sortTypes[0].title || sortTypes[0];
    }

    return _react2.default.createElement(
      _Button.DropdownButton,
      _extends({ className: className, title: title, id: menuId }, props),
      sortTypes.map(function (item, index) {
        var classes = {
          selected: item === currentSortType
        };
        return _react2.default.createElement(
          _MenuItem.MenuItem,
          {
            className: classes,
            key: item.id || index,
            onSelect: function onSelect() {
              return onSortTypeSelected && onSortTypeSelected(item);
            }
          },
          item.title || item
        );
      })
    );
  }
  return null;
};

SortTypeSelector.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** ID for the sort component, necessary for accessibility if there are sort filters on a page */
  id: _propTypes2.default.string,
  /** Array of sort types, can be a string or an object with a 'title' field */
  sortTypes: _propTypes2.default.array.isRequired,
  /** Current selected sort type */
  currentSortType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  /** function(field, value) - Callback to call when a sort type is selected */
  onSortTypeSelected: _propTypes2.default.func
};

SortTypeSelector.defaultProps = {
  className: '',
  id: '',
  currentSortType: null,
  onSortTypeSelected: _helpers.noop
};

exports.default = SortTypeSelector;