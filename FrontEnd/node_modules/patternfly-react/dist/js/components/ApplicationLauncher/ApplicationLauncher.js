'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Dropdown = require('../Dropdown');

var _helpers = require('../../common/helpers');

var _ApplicationLauncherToggle = require('./ApplicationLauncherToggle');

var _ApplicationLauncherToggle2 = _interopRequireDefault(_ApplicationLauncherToggle);

var _ApplicationLauncherItem = require('./ApplicationLauncherItem');

var _ApplicationLauncherItem2 = _interopRequireDefault(_ApplicationLauncherItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ApplicationLauncher = function ApplicationLauncher(_ref) {
  var open = _ref.open,
      grid = _ref.grid,
      tooltip = _ref.tooltip,
      tooltipPlacement = _ref.tooltipPlacement,
      children = _ref.children,
      toggleLauncher = _ref.toggleLauncher,
      className = _ref.className,
      propTypes = _objectWithoutProperties(_ref, ['open', 'grid', 'tooltip', 'tooltipPlacement', 'children', 'toggleLauncher', 'className']);

  var classes = (0, _classnames2.default)('applauncher-pf dropdown', {
    'applauncher-pf-block-list': grid
  }, { open: open });
  return _react2.default.createElement(
    'li',
    { className: classes },
    _react2.default.createElement(_ApplicationLauncherToggle2.default, {
      tooltip: tooltip,
      tooltipPlacement: tooltipPlacement,
      onClick: function onClick() {
        return toggleLauncher();
      },
      open: open
    }),
    _react2.default.createElement(
      _Dropdown.Dropdown.Menu,
      { className: 'dropdown-menu-right' },
      children
    )
  );
};

ApplicationLauncher.propTypes = {
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** Children Node */
  children: _propTypes2.default.node.isRequired,
  /** Toggle Tooltip */
  tooltip: _propTypes2.default.string,
  /** tooltipPlacement */
  tooltipPlacement: _propTypes2.default.string,
  /** Application Launcher Type (Default List) */
  grid: _propTypes2.default.bool,
  /** open bool */
  open: _propTypes2.default.bool,
  /** Toggle launcher func */
  toggleLauncher: _propTypes2.default.func
};
ApplicationLauncher.defaultProps = {
  className: '',
  tooltip: '',
  tooltipPlacement: 'left',
  toggleLauncher: _helpers.noop,
  grid: false,
  open: false
};

ApplicationLauncher.Toggle = _ApplicationLauncherToggle2.default;
ApplicationLauncher.Item = _ApplicationLauncherItem2.default;

exports.default = ApplicationLauncher;