'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _MenuItem = require('../MenuItem');

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FilterValueSelector = function FilterValueSelector(_ref) {
  var className = _ref.className,
      id = _ref.id,
      filterValues = _ref.filterValues,
      currentValue = _ref.currentValue,
      placeholder = _ref.placeholder,
      onFilterValueSelected = _ref.onFilterValueSelected,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'filterValues', 'currentValue', 'placeholder', 'onFilterValueSelected']);

  var classes = (0, _classnames2.default)('filter-pf-select', className);

  if (placeholder || filterValues && filterValues.length > 1) {
    var title = void 0;
    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || filterValues[0].title || filterValues[0];
    }

    var menuId = 'filterCategoryMenu';
    menuId += id ? '_' + id : '';

    var dropdownClasses = (0, _classnames2.default)('filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });

    return _react2.default.createElement(
      'div',
      _extends({ className: classes }, props),
      _react2.default.createElement(
        _Button.DropdownButton,
        { title: title, id: menuId, className: dropdownClasses },
        filterValues && filterValues.map(function (item, index) {
          var menuItemClasses = {
            selected: item === currentValue
          };
          return _react2.default.createElement(
            _MenuItem.MenuItem,
            {
              className: menuItemClasses,
              key: item.id || index,
              onSelect: function onSelect() {
                return onFilterValueSelected(item);
              }
            },
            item.title || item
          );
        })
      )
    );
  }
  return null;
};

FilterValueSelector.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: _propTypes2.default.string,
  /** Array of valid values to select from, each can be a string or an object with a 'title' field */
  filterValues: _propTypes2.default.array.isRequired,
  /** Currently selected value */
  currentValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  /** Placeholder text when no value is selected */
  placeholder: _propTypes2.default.string,
  /** function(field, value) - Callback to call when a value is selected */
  onFilterValueSelected: _propTypes2.default.func
};

FilterValueSelector.defaultProps = {
  className: '',
  id: '',
  currentValue: '',
  placeholder: '',
  onFilterValueSelected: _helpers.noop
};

exports.default = FilterValueSelector;