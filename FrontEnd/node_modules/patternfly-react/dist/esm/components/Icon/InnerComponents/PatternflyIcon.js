var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var PatternflyIcon = function PatternflyIcon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['name', 'className']);

  return React.createElement('span', _extends({ 'aria-hidden': 'true', className: classNames('pficon', 'pficon-' + name, className) }, props));
};

PatternflyIcon.propTypes = {
  /** Patternfly Icon font name */
  name: PropTypes.string.isRequired,
  /** additional classes */
  className: PropTypes.string
};

PatternflyIcon.defaultProps = {
  className: ''
};
export default PatternflyIcon;