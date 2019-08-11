'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _ToolbarConstants = require('../Toolbar/ToolbarConstants');

var _FilterTypeSelector = require('./FilterTypeSelector');

var _FilterTypeSelector2 = _interopRequireDefault(_FilterTypeSelector);

var _FilterValueSelector = require('./FilterValueSelector');

var _FilterValueSelector2 = _interopRequireDefault(_FilterValueSelector);

var _FilterCategorySelector = require('./FilterCategorySelector');

var _FilterCategorySelector2 = _interopRequireDefault(_FilterCategorySelector);

var _FilterCategoryValueSelector = require('./FilterCategoryValueSelector');

var _FilterCategoryValueSelector2 = _interopRequireDefault(_FilterCategoryValueSelector);

var _FilterActiveLabel = require('./FilterActiveLabel');

var _FilterActiveLabel2 = _interopRequireDefault(_FilterActiveLabel);

var _FilterList = require('./FilterList');

var _FilterList2 = _interopRequireDefault(_FilterList);

var _FilterItem = require('./FilterItem');

var _FilterItem2 = _interopRequireDefault(_FilterItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Disabled eslint due to `isDescendantOfToolbar` being a context property we don't want passed by consumers
// eslint-disable-next-line react/prop-types
var ContextualFilter = function ContextualFilter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isDescendantOfToolbar = _ref.isDescendantOfToolbar,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'isDescendantOfToolbar']);

  var classes = (0, _classnames2.default)({
    'filter-pf form-group': true,
    'toolbar-pf-filter': isDescendantOfToolbar
  }, className);

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    _react2.default.createElement(
      'div',
      { className: 'filter-pf-fields' },
      _react2.default.createElement(
        'div',
        { className: 'input-group' },
        children
      )
    )
  );
};

ContextualFilter.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string
};

ContextualFilter.defaultProps = {
  children: null,
  className: ''
};

var Filter = (0, _recompose.getContext)(_ToolbarConstants.toolbarContextTypes)(ContextualFilter);

Filter.TypeSelector = _FilterTypeSelector2.default;
Filter.ValueSelector = _FilterValueSelector2.default;
Filter.CategorySelector = _FilterCategorySelector2.default;
Filter.CategoryValueSelector = _FilterCategoryValueSelector2.default;
Filter.ActiveLabel = _FilterActiveLabel2.default;
Filter.List = _FilterList2.default;
Filter.Item = _FilterItem2.default;

exports.default = Filter;