function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../Dropdown';
import { Icon } from '../../../Icon';

var NotificationDrawerDropDown = function NotificationDrawerDropDown(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      pullRight = _ref.pullRight,
      props = _objectWithoutProperties(_ref, ['id', 'children', 'className', 'pullRight']);

  var classes = classNames('dropdown', { 'pull-right': pullRight }, 'dropdown-kebab-pf', className);

  return React.createElement(
    Dropdown,
    { className: classes, id: id },
    React.createElement(
      Dropdown.Toggle,
      { bsStyle: 'link', noCaret: true },
      React.createElement(Icon, { name: 'ellipsis-v' })
    ),
    React.createElement(
      Dropdown.Menu,
      { className: 'dropdown-menu-right' },
      children
    )
  );
};
NotificationDrawerDropDown.propTypes = {
  /** dropdown button id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** menu right aligned */
  pullRight: PropTypes.bool
};
NotificationDrawerDropDown.defaultProps = {
  pullRight: true,
  id: null,
  className: ''
};
export default NotificationDrawerDropDown;