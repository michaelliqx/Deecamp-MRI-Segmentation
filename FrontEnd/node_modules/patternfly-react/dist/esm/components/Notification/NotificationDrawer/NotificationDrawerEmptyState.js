function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { EmptyState, EmptyStateIcon, EmptyStateTitle } from '../../EmptyState';

var NotificationDrawerEmptyState = function NotificationDrawerEmptyState(_ref) {
  var title = _ref.title,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['title', 'className']);

  return React.createElement(
    EmptyState,
    null,
    React.createElement(EmptyStateIcon, { name: 'info' }),
    React.createElement(
      EmptyStateTitle,
      null,
      title
    )
  );
};
NotificationDrawerEmptyState.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Title */
  title: PropTypes.string
};
NotificationDrawerEmptyState.defaultProps = {
  className: '',
  title: 'No Notifications Available'
};

export default NotificationDrawerEmptyState;