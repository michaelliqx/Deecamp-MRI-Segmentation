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

var FilterCategorySelector = function FilterCategorySelector(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      filterCategories = _ref.filterCategories,
      currentCategory = _ref.currentCategory,
      placeholder = _ref.placeholder,
      onFilterCategorySelected = _ref.onFilterCategorySelected,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'id', 'filterCategories', 'currentCategory', 'placeholder', 'onFilterCategorySelected']);

  var classes = (0, _classnames2.default)('filter-pf-category-select', className);

  if (placeholder || filterCategories && filterCategories.length > 1) {
    var title = void 0;
    if (currentCategory) {
      title = currentCategory.title || currentCategory;
    } else {
      title = placeholder || filterCategories[0].title || filterCategories[0];
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
        'div',
        { className: 'filter-pf-select' },
        _react2.default.createElement(
          _Button.DropdownButton,
          { title: title, id: menuId, className: dropdownClasses },
          filterCategories && filterCategories.map(function (item, index) {
            var menuItemClasses = {
              selected: item === currentCategory
            };
            return _react2.default.createElement(
              _MenuItem.MenuItem,
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
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** ID for the component, necessary for accessibility if there are multiple filters on a page */
  id: _propTypes2.default.string,
  /** Array of filter categories, each can be a string or an object with a 'title' field */
  filterCategories: _propTypes2.default.array.isRequired,
  /** Current selected category */
  currentCategory: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  /** Placeholder text when no category is selected */
  placeholder: _propTypes2.default.string,
  /** function(field, value) - Callback to call when a category is added */
  onFilterCategorySelected: _propTypes2.default.func
};

FilterCategorySelector.defaultProps = {
  children: null,
  className: '',
  id: '',
  currentCategory: '',
  placeholder: '',
  onFilterCategorySelected: _helpers.noop
};

exports.default = FilterCategorySelector;