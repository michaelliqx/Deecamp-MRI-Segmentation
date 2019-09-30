var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';
import { DisposableLabel } from '../Label';

var FilterItem = function FilterItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onRemove = _ref.onRemove,
      filterData = _ref.filterData,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'onRemove', 'filterData']);

  var classes = classNames(className);

  return React.createElement(
    'li',
    _extends({ className: classes }, props),
    React.createElement(
      DisposableLabel,
      { type: 'info', onRemoveClick: function onRemoveClick() {
          return onRemove(filterData);
        } },
      children
    )
  );
};

FilterItem.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** additional filter item classes */
  className: PropTypes.string,
  /** callback when filter is removed  */
  onRemove: PropTypes.func,
  /** Data to pass to onRemove function */
  filterData: PropTypes.object
};

FilterItem.defaultProps = {
  children: null,
  className: '',
  onRemove: noop,
  filterData: {}
};
export default FilterItem;