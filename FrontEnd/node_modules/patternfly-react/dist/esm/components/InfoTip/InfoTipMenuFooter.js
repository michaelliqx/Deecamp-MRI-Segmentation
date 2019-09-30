var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

var InfoTipMenuFooter = function InfoTipMenuFooter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var infoTipMenuFooterClass = classNames('footer', className);

  return React.createElement(
    'div',
    _extends({ className: infoTipMenuFooterClass }, props),
    children
  );
};

InfoTipMenuFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
InfoTipMenuFooter.defaultProps = {
  className: ''
};
export default InfoTipMenuFooter;