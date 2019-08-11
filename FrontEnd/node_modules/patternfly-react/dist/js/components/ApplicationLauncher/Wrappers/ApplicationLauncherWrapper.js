'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ApplicationLauncher = require('../ApplicationLauncher');

var _ApplicationLauncher2 = _interopRequireDefault(_ApplicationLauncher);

var _ApplicationLauncherItem = require('../ApplicationLauncherItem');

var _ApplicationLauncherItem2 = _interopRequireDefault(_ApplicationLauncherItem);

var _helpers = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationLauncherWrapper = function ApplicationLauncherWrapper(_ref) {
  var apps = _ref.apps,
      noIcons = _ref.noIcons,
      grid = _ref.grid,
      tooltip = _ref.tooltip,
      tooltipPlacement = _ref.tooltipPlacement,
      toggleLauncher = _ref.toggleLauncher,
      open = _ref.open;

  var renderApps = apps.map(function (app, i) {
    return _react2.default.createElement(_ApplicationLauncherItem2.default, {
      key: i,
      icon: app.icon,
      title: app.title,
      tooltip: app.tooltip,
      tooltipPlacement: tooltipPlacement,
      onClick: app.onClick,
      noIcons: noIcons
    });
  });

  return _react2.default.createElement(
    _ApplicationLauncher2.default,
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
  apps: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    icon: _propTypes2.default.string,
    tooltip: _propTypes2.default.string,
    onClick: _propTypes2.default.func
  })),
  /** No Icons Bool */
  noIcons: _propTypes2.default.bool,
  /** Grid instead of List (List is Default) */
  grid: _propTypes2.default.bool,
  /** Toggle Tooltip */
  tooltip: _propTypes2.default.string,
  /** Tooltip Placement */
  tooltipPlacement: _propTypes2.default.string,
  /** Launcher open bool */
  open: _propTypes2.default.bool.isRequired,
  /** Toggle launcher func */
  toggleLauncher: _propTypes2.default.func
};
ApplicationLauncherWrapper.defaultProps = {
  noIcons: false,
  tooltip: '',
  tooltipPlacement: 'left',
  grid: false,
  toggleLauncher: _helpers.noop,
  apps: [{
    title: 'Royal',
    icon: 'virtual-machine',
    tooltip: 'Tooltip!',
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }]
};

exports.default = ApplicationLauncherWrapper;