import React from 'react';
import PropTypes from 'prop-types';
import ApplicationLauncher from '../ApplicationLauncher';
import ApplicationLauncherItem from '../ApplicationLauncherItem';
import { noop } from '../../../common/helpers';

var ApplicationLauncherWrapper = function ApplicationLauncherWrapper(_ref) {
  var apps = _ref.apps,
      noIcons = _ref.noIcons,
      grid = _ref.grid,
      tooltip = _ref.tooltip,
      tooltipPlacement = _ref.tooltipPlacement,
      toggleLauncher = _ref.toggleLauncher,
      open = _ref.open;

  var renderApps = apps.map(function (app, i) {
    return React.createElement(ApplicationLauncherItem, {
      key: i,
      icon: app.icon,
      title: app.title,
      tooltip: app.tooltip,
      tooltipPlacement: tooltipPlacement,
      onClick: app.onClick,
      noIcons: noIcons
    });
  });

  return React.createElement(
    ApplicationLauncher,
    {
      grid: grid,
      tooltip: tooltip,
      tooltipPlacement: tooltipPlacement,
      open: open,
      toggleLauncher: toggleLauncher
    },
    renderApps
  );
};
ApplicationLauncherWrapper.propTypes = {
  /** Array of App Objects */
  apps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.string,
    tooltip: PropTypes.string,
    onClick: PropTypes.func
  })),
  /** No Icons Bool */
  noIcons: PropTypes.bool,
  /** Grid instead of List (List is Default) */
  grid: PropTypes.bool,
  /** Toggle Tooltip */
  tooltip: PropTypes.string,
  /** Tooltip Placement */
  tooltipPlacement: PropTypes.string,
  /** Launcher open bool */
  open: PropTypes.bool.isRequired,
  /** Toggle launcher func */
  toggleLauncher: PropTypes.func
};
ApplicationLauncherWrapper.defaultProps = {
  noIcons: false,
  tooltip: '',
  tooltipPlacement: 'left',
  grid: false,
  toggleLauncher: noop,
  apps: [{
    title: 'Royal',
    icon: 'virtual-machine',
    tooltip: 'Tooltip!',
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }]
};

export default ApplicationLauncherWrapper;