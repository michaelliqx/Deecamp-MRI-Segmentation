var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

var ModalCloseButton = function ModalCloseButton(_ref) {
  var className = _ref.className,
      closeText = _ref.closeText,
      props = _objectWithoutProperties(_ref, ['className', 'closeText']);

  return React.createElement(
    'button',
    _extends({ className: classNames('close', className) }, props),
    React.createElement(Icon, { type: 'pf', name: 'close', 'aria-hidden': 'true', title: closeText }),
    React.createElement(
      'span',
      { className: 'sr-only' },
      closeText
    )
  );
};

ModalCloseButton.defaultProps = {
  className: '',
  closeText: 'Close'
};

ModalCloseButton.propTypes = {
  /** additional classes */
  className: PropTypes.string,
  /** Alternate text for close button for screen readers (default 'Close') */
  closeText: PropTypes.string
};

export default ModalCloseButton;