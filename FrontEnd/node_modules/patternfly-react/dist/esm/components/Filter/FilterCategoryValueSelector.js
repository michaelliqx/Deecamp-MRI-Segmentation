var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

var FilterCategoryValueSelector = function FilterCategoryValueSelector(_ref) {
  var className = _ref.className,
      id = _ref.id,
      categoryValues = _ref.categoryValues,
      currentValue = _ref.currentValue,
      placeholder = _ref.placeholder,
      onCategoryValueSelected = _ref.onCategoryValueSelected,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'categoryValues', 'currentValue', 'placeholder', 'onCategoryValueSelected']);

  var classes = classNames('filter-pf-select', className);

  if (placeholder || categoryValues && categoryValues.length > 1) {
    var title = void 0;
    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || categoryValues[0].title || categoryValues[0];
    }

    var menuId = 'filterCategoryMenu';
    menuId += id ? '_' + id : '';

    var dropdownClasses = classNames('filter-pf-category-select-value', 'filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });

    return React.createElement(
      'div',
      _extends({ className: classes }, props),
      React.createElement(
        DropdownButton,
        { className: dropdownClasses, title: title, id: menuId },
        categoryValues && categoryValues.map(function (item, index) {
          var menuItemClasses = {
            selected: item === currentValue
          };
          return React.createElement(
            MenuItem,
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
  className: PropTypes.string,
  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,
  /** Array of valid values for the category to select from, each can be a string or an object with a 'title' field */
  categoryValues: PropTypes.array,
  /** Currently selected category value */
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Placeholder text when no category value is selected */
  placeholder: PropTypes.string,
  /** function(field, value) - Callback to call when a category value is selected */
  onCategoryValueSelected: PropTypes.func
};

FilterCategoryValueSelector.defaultProps = {
  className: '',
  id: '',
  categoryValues: null,
  currentValue: '',
  placeholder: '',
  onCategoryValueSelected: noop
};

export default FilterCategoryValueSelector;