'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tooltip = require('../Tooltip');

var _OverlayTrigger = require('../OverlayTrigger');

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ApplicationLauncherItem = function ApplicationLauncherItem(_ref) {
  var _onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      tooltipPlacement = _ref.tooltipPlacement,
      title = _ref.title,
      icon = _ref.icon,
      noIcons = _ref.noIcons,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['onClick', 'tooltip', 'tooltipPlacement', 'title', 'icon', 'noIcons', 'className']);

  var classes = (0, _classnames2.default)('applauncher-pf-item', className);

  if (tooltip !== null) {
    return _react2.default.createElement(
      _OverlayTrigger.OverlayTrigger,
      {
        overlay: _react2.default.createElement(
          _Tooltip.Tooltip,
          { id: title },
          tooltip
        ),
        placement: tooltipPlacement,
        trigger: ['hover', 'focus'],
        rootClose: false
      },
      _react2.default.createElement(
        'li',
        { className: classes, role: 'presentation' },
        _react2.default.createElement(
          'a',
          { className: 'applauncher-pf-link', href: '#', onClick: function onClick(e) {
              return _onClick(e);
            }, role: 'menuitem' },
          !noIcons && _react2.default.createElement(_Icon.Icon, { type: 'pf', name: icon, className: 'applauncher-pf-link-icon' }),
          _react2.default.createElement(
            'span',
            { className: 'applauncher-pf-link-title' },
            title
          )
        )
      )
    );
  }
  return _react2.default.createElement(
    'li',
    { className: classes, role: 'presentation' },
    _react2.default.createElement(
      'a',
      { className: 'applauncher-pf-link', href: '#', onClick: function onClick(e) {
          return _onClick(e);
        }, role: 'menuitem' },
      !noIcons && _react2.default.createElement(_Icon.Icon, { type: 'pf', name: icon, className: 'applauncher-pf-link-icon' }),
      _react2.default.createElement(
        'span',
        { className: 'applauncher-pf-link-title' },
        title
      )
    )
  );
};
ApplicationLauncherItem.propTypes = {
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** onClick func */
  onClick: _propTypes2.default.func,
  /** Title String */
  title: _propTypes2.default.string.isRequired,
  /** Icon Type */
  icon: _propTypes2.default.string.isRequired,
  /** App Tooltip */
  tooltip: _propTypes2.default.string,
  /** Tooltip Placement */
  tooltipPlacement: _propTypes2.default.string,
  /** No Icons Bool */
  noIcons: _propTypes2.default.bool
};
ApplicationLauncherItem.defaultProps = {
  className: '',
  onClick: null,
  noIcons: false,
  tooltipPlacement: 'left',
  tooltip: null
};
exports.default = ApplicationLauncherItem;