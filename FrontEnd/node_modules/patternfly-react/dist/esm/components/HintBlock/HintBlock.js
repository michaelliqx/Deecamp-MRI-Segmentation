var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';

var HintBlock = function HintBlock(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      title = _ref.title,
      body = _ref.body,
      buttonContent = _ref.buttonContent,
      onButtonClick = _ref.onButtonClick,
      props = _objectWithoutProperties(_ref, ['className', 'onClose', 'title', 'body', 'buttonContent', 'onButtonClick']);

  var classes = classNames('hint-block-pf', className);

  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    onClose && React.createElement(
      'button',
      { type: 'button', className: 'close', 'aria-hidden': 'true', 'aria-label': 'Close', onClick: onClose },
      React.createElement('span', { className: 'pficon pficon-close' })
    ),
    React.createElement(
      'div',
      { className: 'hint-block-pf-title' },
      title
    ),
    React.createElement(
      'div',
      { className: 'hint-block-pf-body' },
      body
    ),
    buttonContent && React.createElement(
      'button',
      { className: 'btn btn-primary', type: 'button', onClick: onButtonClick },
      buttonContent
    )
  );
};

HintBlock.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Close callback, if not provided the block will not be closable */
  onClose: PropTypes.func,
  /** Title for the hint block */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Body of the hint block */
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Optional button contents for the hint block */
  buttonContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Callback for the button if buttonContent is provided */
  onButtonClick: PropTypes.func
};

HintBlock.defaultProps = {
  className: '',
  onClose: null,
  buttonContent: null,
  onButtonClick: noop
};

export default HintBlock;