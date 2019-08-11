var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

/**
 * ListViewIcon used as a default content for ListViewLeft
 */
var ListViewIcon = function ListViewIcon(_ref) {
  var type = _ref.type,
      name = _ref.name,
      className = _ref.className,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ['type', 'name', 'className', 'size']);

  return React.createElement(Icon, _extends({ type: type, name: name, className: classNames('list-view-pf-icon-' + size, className) }, props));
};
ListViewIcon.propTypes = {
  /** Icon type (pf or fa) */
  type: PropTypes.string,
  /** Name of the icon font */
  name: PropTypes.string.isRequired,
  /** additional classes */
  className: PropTypes.string,
  /** Icon size (sm, md, lg), defaults to 'sm' */
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};
ListViewIcon.defaultProps = {
  type: 'fa',
  size: 'sm',
  className: ''
};
export default ListViewIcon;