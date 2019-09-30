var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var AboutModalVersionItem = function AboutModalVersionItem(_ref) {
  var className = _ref.className,
      label = _ref.label,
      versionText = _ref.versionText,
      props = _objectWithoutProperties(_ref, ['className', 'label', 'versionText']);

  return React.createElement(
    'li',
    _extends({ className: className }, props),
    React.createElement(
      'strong',
      null,
      label
    ),
    ' ',
    versionText
  );
};

AboutModalVersionItem.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Label for the version */
  label: PropTypes.string.isRequired,
  /** Text for the version */
  versionText: PropTypes.string.isRequired
};

AboutModalVersionItem.defaultProps = {
  className: ''
};

export default AboutModalVersionItem;