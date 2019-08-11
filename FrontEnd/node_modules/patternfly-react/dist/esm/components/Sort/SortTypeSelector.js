var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

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

    return React.createElement(
      DropdownButton,
      _extends({ className: className, title: title, id: menuId }, props),
      sortTypes.map(function (item, index) {
        var classes = {
          selected: item === currentSortType
        };
        return React.createElement(
          MenuItem,
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
  className: PropTypes.string,
  /** ID for the sort component, necessary for accessibility if there are sort filters on a page */
  id: PropTypes.string,
  /** Array of sort types, can be a string or an object with a 'title' field */
  sortTypes: PropTypes.array.isRequired,
  /** Current selected sort type */
  currentSortType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** function(field, value) - Callback to call when a sort type is selected */
  onSortTypeSelected: PropTypes.func
};

SortTypeSelector.defaultProps = {
  className: '',
  id: '',
  currentSortType: null,
  onSortTypeSelected: noop
};

export default SortTypeSelector;