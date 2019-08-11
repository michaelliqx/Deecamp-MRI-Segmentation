var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewInfoItem renders contents of individual Info item
 */
var ListViewInfoItem = function ListViewInfoItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stacked = _ref.stacked,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'stacked']);

  var classes = classNames({ 'list-view-pf-additional-info-item-stacked': stacked }, 'list-view-pf-additional-info-item', className);
  return React.createElement(
    'div',
    _extends({ className: classes, onClick: function onClick(e) {
        return e.stopPropagation();
      } }, props),
    children
  );
};
ListViewInfoItem.propTypes = {
  /** Child node - contents of the additional info item */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Toggle the InfoItem contents stacking */
  stacked: PropTypes.bool
};
ListViewInfoItem.defaultProps = {
  children: null,
  className: '',
  stacked: false
};
export default ListViewInfoItem;