var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../../common/helpers';

var LoginCardRememberMe = function LoginCardRememberMe(_ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['onClick', 'label', 'className']);

  return label && React.createElement(
    'label',
    { className: 'checkbox-label ' + className },
    React.createElement('input', _extends({}, props, { type: 'checkbox', onClick: onClick })),
    ' ',
    label
  );
};

LoginCardRememberMe.propTypes = {
  /** The checkbox label. */
  label: PropTypes.string,
  /** Additional css classes. */
  className: PropTypes.string,
  /** Callback to trigger when clicking the checkbox */
  onClick: PropTypes.func
};

LoginCardRememberMe.defaultProps = {
  label: null,
  className: '',
  onClick: noop
};

export default LoginCardRememberMe;