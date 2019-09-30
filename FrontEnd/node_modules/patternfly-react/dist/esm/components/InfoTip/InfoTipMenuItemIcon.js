var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../Icon';

var InfoTipMenuItemIcon = function InfoTipMenuItemIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  var infoTipMenuItemIconClass = classNames('i', className);

  return React.createElement(Icon, _extends({ className: infoTipMenuItemIconClass }, props));
};

InfoTipMenuItemIcon.propTypes = {
  type: PropTypes.oneOf(['fa', 'pf']),
  name: PropTypes.string,
  className: PropTypes.string
};

InfoTipMenuItemIcon.defaultProps = {
  type: 'pf',
  name: 'info',
  className: ''
};

export default InfoTipMenuItemIcon;