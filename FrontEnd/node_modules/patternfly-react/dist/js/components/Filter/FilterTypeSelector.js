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

var FilterTypeSelector = function FilterTypeSelector(_ref) {
  var className = _ref.className,
      id = _ref.id,
      filterTypes = _ref.filterTypes,
      currentFilterType = _ref.currentFilterType,
      placeholder = _ref.placeholder,
      onFilterTypeSelected = _ref.onFilterTypeSelected,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'filterTypes', 'currentFilterType', 'placeholder', 'onFilterTypeSelected']);

  var classes = (0, _classnames2.default)('input-group-btn', className);
  if (placeholder || filterTypes && filterTypes.length > 1) {
    var title = void 0;
    if (currentFilterType) {
      title = currentFilterType.title || currentFilterType;
    } else {
      title = placeholder || filterTypes[0].title || filterTypes[0];
    }

    var menuId = 'filterFieldTypeMenu';
    menuId += id ? '_' + id : '';

    return _react2.default.createElement(
      'div',
      _extends({ className: classes }, props),
      _react2.default.createElement(
        _Button.DropdownButton,
        { title: title, id: menuId },
        placeholder && _react2.default.createElement(
          _MenuItem.MenuItem,
          { title: placeholder, key: 'Placeholder', onSelect: onFilterTypeSelected },
          placeholder
        ),
        filterTypes.map(function (item, index) {
          var menuItemClasses = {
            selected: item === currentFilterType
          };
          return _react2.default.createElement(
            _MenuItem.MenuItem,
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
  className: _propTypes2.default.string,
  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: _propTypes2.default.string,
  /** Array of filter types, can be a string or an object with a 'title' field */
  filterTypes: _propTypes2.default.array.isRequired,
  /** Current selected filter type */
  currentFilterType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  /** Placeholder text when no filter type is selected */
  placeholder: _propTypes2.default.string,
  /** function(field, value) - Callback to call when a filter type is selected */
  onFilterTypeSelected: _propTypes2.default.func
};

FilterTypeSelector.defaultProps = {
  className: '',
  id: '',
  currentFilterType: '',
  placeholder: '',
  onFilterTypeSelected: _helpers.noop
};

exports.default = FilterTypeSelector;