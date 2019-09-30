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

var FilterCategoryValueSelector = function FilterCategoryValueSelector(_ref) {
  var className = _ref.className,
      id = _ref.id,
      categoryValues = _ref.categoryValues,
      currentValue = _ref.currentValue,
      placeholder = _ref.placeholder,
      onCategoryValueSelected = _ref.onCategoryValueSelected,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'categoryValues', 'currentValue', 'placeholder', 'onCategoryValueSelected']);

  var classes = (0, _classnames2.default)('filter-pf-select', className);

  if (placeholder || categoryValues && categoryValues.length > 1) {
    var title = void 0;
    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || categoryValues[0].title || categoryValues[0];
    }

    var menuId = 'filterCategoryMenu';
    menuId += id ? '_' + id : '';

    var dropdownClasses = (0, _classnames2.default)('filter-pf-category-select-value', 'filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });

    return _react2.default.createElement(
      'div',
      _extends({ className: classes }, props),
      _react2.default.createElement(
        _Button.DropdownButton,
        { className: dropdownClasses, title: title, id: menuId },
        categoryValues && categoryValues.map(function (item, index) {
          var menuItemClasses = {
            selected: item === currentValue
          };
          return _react2.default.createElement(
            _MenuItem.MenuItem,
            {
              className: menuItemClasses,
              key: item.id || index,
              onSelect: function onSelect() {
                return onCategoryValueSelected(item);
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

FilterCategoryValueSelector.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: _propTypes2.default.string,
  /** Array of valid values for the category to select from, each can be a string or an object with a 'title' field */
  categoryValues: _propTypes2.default.array,
  /** Currently selected category value */
  currentValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  /** Placeholder text when no category value is selected */
  placeholder: _propTypes2.default.string,
  /** function(field, value) - Callback to call when a category value is selected */
  onCategoryValueSelected: _propTypes2.default.func
};

FilterCategoryValueSelector.defaultProps = {
  className: '',
  id: '',
  categoryValues: null,
  currentValue: '',
  placeholder: '',
  onCategoryValueSelected: _helpers.noop
};

exports.default = FilterCategoryValueSelector;