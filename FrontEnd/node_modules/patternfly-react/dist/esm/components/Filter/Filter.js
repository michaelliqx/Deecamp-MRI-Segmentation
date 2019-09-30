var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { getContext } from 'recompose';
import { toolbarContextTypes } from '../Toolbar/ToolbarConstants';
import FilterTypeSelector from './FilterTypeSelector';
import FilterValueSelector from './FilterValueSelector';
import FilterCategorySelector from './FilterCategorySelector';
import FilterCategoryValueSelector from './FilterCategoryValueSelector';
import FilterActiveLabel from './FilterActiveLabel';
import FilterList from './FilterList';
import FilterItem from './FilterItem';

// Disabled eslint due to `isDescendantOfToolbar` being a context property we don't want passed by consumers
// eslint-disable-next-line react/prop-types
var ContextualFilter = function ContextualFilter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isDescendantOfToolbar = _ref.isDescendantOfToolbar,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'isDescendantOfToolbar']);

  var classes = classNames({
    'filter-pf form-group': true,
    'toolbar-pf-filter': isDescendantOfToolbar
  }, className);

  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    React.createElement(
      'div',
      { className: 'filter-pf-fields' },
      React.createElement(
        'div',
        { className: 'input-group' },
        children
      )
    )
  );
};

ContextualFilter.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

ContextualFilter.defaultProps = {
  children: null,
  className: ''
};

var Filter = getContext(toolbarContextTypes)(ContextualFilter);

Filter.TypeSelector = FilterTypeSelector;
Filter.ValueSelector = FilterValueSelector;
Filter.CategorySelector = FilterCategorySelector;
Filter.CategoryValueSelector = FilterCategoryValueSelector;
Filter.ActiveLabel = FilterActiveLabel;
Filter.List = FilterList;
Filter.Item = FilterItem;

export default Filter;