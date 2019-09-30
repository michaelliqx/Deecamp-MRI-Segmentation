function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from '../Dropdown';
import { noop } from '../../common/helpers';
import ApplicationLauncherToggle from './ApplicationLauncherToggle';
import ApplicationLauncherItem from './ApplicationLauncherItem';

var ApplicationLauncher = function ApplicationLauncher(_ref) {
  var open = _ref.open,
      grid = _ref.grid,
      tooltip = _ref.tooltip,
      tooltipPlacement = _ref.tooltipPlacement,
      children = _ref.children,
      toggleLauncher = _ref.toggleLauncher,
      className = _ref.className,
      propTypes = _objectWithoutProperties(_ref, ['open', 'grid', 'tooltip', 'tooltipPlacement', 'children', 'toggleLauncher', 'className']);

  var classes = classNames('applauncher-pf dropdown', {
    'applauncher-pf-block-list': grid
  }, { open: open });
  return React.createElement(
    'li',
    { className: classes },
    React.createElement(ApplicationLauncherToggle, {
      tooltip: tooltip,
      tooltipPlacement: tooltipPlacement,
      onClick: function onClick() {
        return toggleLauncher();
      },
      open: open
    }),
    React.createElement(
      Dropdown.Menu,
      { className: 'dropdown-menu-right' },
      children
    )
  );
};

ApplicationLauncher.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Children Node */
  children: PropTypes.node.isRequired,
  /** Toggle Tooltip */
  tooltip: PropTypes.string,
  /** tooltipPlacement */
  tooltipPlacement: PropTypes.string,
  /** Application Launcher Type (Default List) */
  grid: PropTypes.bool,
  /** open bool */
  open: PropTypes.bool,
  /** Toggle launcher func */
  toggleLauncher: PropTypes.func
};
ApplicationLauncher.defaultProps = {
  className: '',
  tooltip: '',
  tooltipPlacement: 'left',
  toggleLauncher: noop,
  grid: false,
  open: false
};

ApplicationLauncher.Toggle = ApplicationLauncherToggle;
ApplicationLauncher.Item = ApplicationLauncherItem;

export default ApplicationLauncher;