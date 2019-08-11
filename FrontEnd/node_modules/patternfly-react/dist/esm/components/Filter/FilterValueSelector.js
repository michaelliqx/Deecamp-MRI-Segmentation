var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

var FilterValueSelector = function FilterValueSelector(_ref) {
  var className = _ref.className,
      id = _ref.id,
      filterValues = _ref.filterValues,
      currentValue = _ref.currentValue,
      placeholder = _ref.placeholder,
      onFilterValueSelected = _ref.onFilterValueSelected,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'filterValues', 'currentValue', 'placeholder', 'onFilterValueSelected']);

  var classes = classNames('filter-pf-select', className);

  if (placeholder || filterValues && filterValues.length > 1) {
    var title = void 0;
    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || filterValues[0].title || filterValues[0];
    }

    var menuId = 'filterCategoryMenu';
    menuId += id ? '_' + id : '';

    var dropdownClasses = classNames('filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });

    return React.createElement(
      'div',
      _extends({ className: classes }, props),
      React.createElement(
        DropdownButton,
        { title: title, id: menuId, className: dropdownClasses },
        filterValues && filterValues.map(function (item, index) {
          var menuItemClasses = {
            selected: item === currentValue
          };
          return React.createElement(
            MenuItem,
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
  className: PropTypes.string,
  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,
  /** Array of valid values to select from, each can be a string or an object with a 'title' field */
  filterValues: PropTypes.array.isRequired,
  /** Currently selected value */
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Placeholder text when no value is selected */
  placeholder: PropTypes.string,
  /** function(field, value) - Callback to call when a value is selected */
  onFilterValueSelected: PropTypes.func
};

FilterValueSelector.defaultProps = {
  className: '',
  id: '',
  currentValue: '',
  placeholder: '',
  onFilterValueSelected: noop
};

export default FilterValueSelector;