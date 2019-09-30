import React from 'react';
import PropTypes from 'prop-types';

var NotificationInfoRight = function NotificationInfoRight(_ref) {
  var text = _ref.text;
  return React.createElement(
    'span',
    { className: 'time' },
    text
  );
};

NotificationInfoRight.propTypes = {
  /** Text */
  text: PropTypes.string.isRequired
};

export default NotificationInfoRight;