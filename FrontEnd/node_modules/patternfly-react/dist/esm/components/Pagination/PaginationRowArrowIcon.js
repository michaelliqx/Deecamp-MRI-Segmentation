function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

/**
 * PaginationRowArrowIcon component for Patternfly React
 */
var PaginationRowArrowIcon = function PaginationRowArrowIcon(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ['name']);

  var iconName = 'angle-' + name;
  return React.createElement(Icon, { type: 'fa', name: iconName, className: 'i' });
};
PaginationRowArrowIcon.propTypes = {
  /** icon name */
  name: PropTypes.oneOf(['left', 'double-left', 'right', 'double-right']).isRequired
};
export default PaginationRowArrowIcon;