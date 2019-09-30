var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

var FilterCategorySelector = function FilterCategorySelector(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      filterCategories = _ref.filterCategories,
      currentCategory = _ref.currentCategory,
      placeholder = _ref.placeholder,
      onFilterCategorySelected = _ref.onFilterCategorySelected,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'id', 'filterCategories', 'currentCategory', 'placeholder', 'onFilterCategorySelected']);

  var classes = classNames('filter-pf-category-select', className);

  if (placeholder || filterCategories && filterCategories.length > 1) {
    var title = void 0;
    if (currentCategory) {
      title = currentCategory.title || currentCategory;
    } else {
      title = placeholder || filterCategories[0].title || filterCategories[0];
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
        'div',
        { className: 'filter-pf-select' },
        React.createElement(
          DropdownButton,
          { title: title, id: menuId, className: dropdownClasses },
          filterCategories && filterCategories.map(function (item, index) {
            var menuItemClasses = {
              selected: item === currentCategory
            };
            return React.createElement(
              MenuItem,
              {
                className: menuItemClasses,
                key: item.id || index,
                onSelect: function onSelect() {
                  return onFilterCategorySelected(item);
                }
              },
              item.title || item
            );
          })
        )
      ),
      children
    );
  }
  return null;
};

FilterCategorySelector.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** ID for the component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,
  /** Array of filter categories, each can be a string or an object with a 'title' field */
  filterCategories: PropTypes.array.isRequired,
  /** Current selected category */
  currentCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Placeholder text when no category is selected */
  placeholder: PropTypes.string,
  /** function(field, value) - Callback to call when a category is added */
  onFilterCategorySelected: PropTypes.func
};

FilterCategorySelector.defaultProps = {
  children: null,
  className: '',
  id: '',
  currentCategory: '',
  placeholder: '',
  onFilterCategorySelected: noop
};

export default FilterCategorySelector;