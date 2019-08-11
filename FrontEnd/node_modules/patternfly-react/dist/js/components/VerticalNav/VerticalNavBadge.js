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

var _OverlayTrigger = require('../OverlayTrigger');

var _Tooltip = require('../Tooltip');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticalNavBadge = function VerticalNavBadge(props) {
  var badgeClass = props.badgeClass,
      iconClass = props.iconClass,
      tooltip = props.tooltip,
      count = props.count;

  var key = badgeClass || iconClass || count;
  var badgeDiv = _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('badge', badgeClass) },
    count && iconClass && _react2.default.createElement('span', { className: iconClass }),
    count && _react2.default.createElement(
      'span',
      null,
      count
    )
  );
  return !tooltip ? badgeDiv : _react2.default.createElement(
    _OverlayTrigger.OverlayTrigger,
    { key: key, placement: 'right', overlay: _react2.default.createElement(
        _Tooltip.Tooltip,
        { id: key },
        tooltip
      ) },
    badgeDiv
  );
};

VerticalNavBadge.propTypes = {
  badgeClass: _propTypes2.default.string,
  iconClass: _propTypes2.default.string,
  tooltip: _propTypes2.default.string,
  count: _propTypes2.default.number
};
VerticalNavBadge.defaultProps = {
  badgeClass: '',
  iconClass: '',
  tooltip: '',
  count: undefined
};

VerticalNavBadge.displayName = 'VerticalNav.Badge';

exports.default = VerticalNavBadge;