var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';

var RemoveButton = function RemoveButton(_ref) {
  var className = _ref.className,
      title = _ref.title,
      onRemoveClick = _ref.onRemoveClick,
      props = _objectWithoutProperties(_ref, ['className', 'title', 'onRemoveClick']);

  var classes = classNames('pficon pficon-close', className);

  return React.createElement(
    'a',
    {
      href: '#',
      onClick: function onClick(e) {
        e.preventDefault();
        onRemoveClick && onRemoveClick();
      },
      className: 'pf-remove-button'
    },
    React.createElement('span', _extends({ className: classes }, props, { 'aria-hidden': 'true' })),
    React.createElement(
      'span',
      { className: 'sr-only' },
      title
    )
  );
};

RemoveButton.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Reader title text */
  title: PropTypes.string,
  /** Callback when remove button is clicked */
  onRemoveClick: PropTypes.func
};

RemoveButton.defaultProps = {
  className: '',
  title: 'Remove',
  onRemoveClick: noop
};

export default RemoveButton;