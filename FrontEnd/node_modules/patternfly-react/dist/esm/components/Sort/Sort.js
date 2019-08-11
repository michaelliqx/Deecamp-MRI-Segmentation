var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import SortTypeSelector from './SortTypeSelector';
import SortDirectionSelector from './SortDirectionSelector';

/**
 * Sort Component for PatternFly React
 */
var Sort = function Sort(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = classNames('form-group', className);
  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};

Sort.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

Sort.defaultProps = {
  children: null,
  className: ''
};

Sort.TypeSelector = SortTypeSelector;
Sort.DirectionSelector = SortDirectionSelector;

export default Sort;