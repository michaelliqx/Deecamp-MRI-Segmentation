var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

var FilterTypeSelector = function FilterTypeSelector(_ref) {
  var className = _ref.className,
      id = _ref.id,
      filterTypes = _ref.filterTypes,
      currentFilterType = _ref.currentFilterType,
      placeholder = _ref.placeholder,
      onFilterTypeSelected = _ref.onFilterTypeSelected,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'filterTypes', 'currentFilterType', 'placeholder', 'onFilterTypeSelected']);

  var classes = classNames('input-group-btn', className);
  if (placeholder || filterTypes && filterTypes.length > 1) {
    var title = void 0;
    if (currentFilterType) {
      title = currentFilterType.title || currentFilterType;
    } else {
      title = placeholder || filterTypes[0].title || filterTypes[0];
    }

    var menuId = 'filterFieldTypeMenu';
    menuId += id ? '_' + id : '';

    return React.createElement(
      'div',
      _extends({ className: classes }, props),
      React.createElement(
        DropdownButton,
        { title: title, id: menuId },
        placeholder && React.createElement(
          MenuItem,
          { title: placeholder, key: 'Placeholder', onSelect: onFilterTypeSelected },
          placeholder
        ),
        filterTypes.map(function (item, index) {
          var menuItemClasses = {
            selected: item === currentFilterType
          };
          return React.createElement(
            MenuItem,
            { className: menuItemClasses, key: item.id || index, onSelect: function onSelect() {
                return onFilterTypeSelected(item);
              } },
            item.title || item
          );
        })
      )
    );
  }
  return null;
};

FilterTypeSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,
  /** Array of filter types, can be a string or an object with a 'title' field */
  filterTypes: PropTypes.array.isRequired,
  /** Current selected filter type */
  currentFilterType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Placeholder text when no filter type is selected */
  placeholder: PropTypes.string,
  /** function(field, value) - Callback to call when a filter type is selected */
  onFilterTypeSelected: PropTypes.func
};

FilterTypeSelector.defaultProps = {
  className: '',
  id: '',
  currentFilterType: '',
  placeholder: '',
  onFilterTypeSelected: noop
};

export default FilterTypeSelector;