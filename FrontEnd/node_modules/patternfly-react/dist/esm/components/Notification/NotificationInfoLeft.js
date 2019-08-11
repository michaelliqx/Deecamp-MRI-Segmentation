import React from 'react';
import PropTypes from 'prop-types';

var NotificationInfoLeft = function NotificationInfoLeft(_ref) {
  var text = _ref.text;
  return React.createElement(
    'span',
    { className: 'date' },
    text
  );
};

NotificationInfoLeft.propTypes = {
  /** Text */
  text: PropTypes.string.isRequired
};

export default NotificationInfoLeft;