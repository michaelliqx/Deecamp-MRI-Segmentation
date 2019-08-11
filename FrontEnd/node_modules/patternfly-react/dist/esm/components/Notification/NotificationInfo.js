function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import NotificationInfoRight from './NotificationInfoRight';
import NotificationInfoLeft from './NotificationInfoLeft';

var NotificationInfo = function NotificationInfo(_ref) {
  var rightText = _ref.rightText,
      leftText = _ref.leftText,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['rightText', 'leftText', 'className']);

  var classes = classNames('drawer-pf-notification-info', className);

  return React.createElement(
    'div',
    { className: classes },
    React.createElement(NotificationInfoLeft, { text: leftText }),
    React.createElement(NotificationInfoRight, { text: rightText })
  );
};
NotificationInfo.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** leftText and rightText Strings */
  leftText: PropTypes.string,
  rightText: PropTypes.string
};
NotificationInfo.defaultProps = {
  className: '',
  leftText: '',
  rightText: ''
};

export default NotificationInfo;