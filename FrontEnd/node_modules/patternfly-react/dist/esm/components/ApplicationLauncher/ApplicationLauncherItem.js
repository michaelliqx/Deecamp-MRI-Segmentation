function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../Tooltip';
import { OverlayTrigger } from '../OverlayTrigger';
import { Icon } from '../Icon';

var ApplicationLauncherItem = function ApplicationLauncherItem(_ref) {
  var _onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      tooltipPlacement = _ref.tooltipPlacement,
      title = _ref.title,
      icon = _ref.icon,
      noIcons = _ref.noIcons,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['onClick', 'tooltip', 'tooltipPlacement', 'title', 'icon', 'noIcons', 'className']);

  var classes = classNames('applauncher-pf-item', className);

  if (tooltip !== null) {
    return React.createElement(
      OverlayTrigger,
      {
        overlay: React.createElement(
          Tooltip,
          { id: title },
          tooltip
        ),
        placement: tooltipPlacement,
        trigger: ['hover', 'focus'],
        rootClose: false
      },
      React.createElement(
        'li',
        { className: classes, role: 'presentation' },
        React.createElement(
          'a',
          { className: 'applauncher-pf-link', href: '#', onClick: function onClick(e) {
              return _onClick(e);
            }, role: 'menuitem' },
          !noIcons && React.createElement(Icon, { type: 'pf', name: icon, className: 'applauncher-pf-link-icon' }),
          React.createElement(
            'span',
            { className: 'applauncher-pf-link-title' },
            title
          )
        )
      )
    );
  }
  return React.createElement(
    'li',
    { className: classes, role: 'presentation' },
    React.createElement(
      'a',
      { className: 'applauncher-pf-link', href: '#', onClick: function onClick(e) {
          return _onClick(e);
        }, role: 'menuitem' },
      !noIcons && React.createElement(Icon, { type: 'pf', name: icon, className: 'applauncher-pf-link-icon' }),
      React.createElement(
        'span',
        { className: 'applauncher-pf-link-title' },
        title
      )
    )
  );
};
ApplicationLauncherItem.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** onClick func */
  onClick: PropTypes.func,
  /** Title String */
  title: PropTypes.string.isRequired,
  /** Icon Type */
  icon: PropTypes.string.isRequired,
  /** App Tooltip */
  tooltip: PropTypes.string,
  /** Tooltip Placement */
  tooltipPlacement: PropTypes.string,
  /** No Icons Bool */
  noIcons: PropTypes.bool
};
ApplicationLauncherItem.defaultProps = {
  className: '',
  onClick: null,
  noIcons: false,
  tooltipPlacement: 'left',
  tooltip: null
};
export default ApplicationLauncherItem;