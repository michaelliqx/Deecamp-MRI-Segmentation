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

var _NotificationInfoRight = require('./NotificationInfoRight');

var _NotificationInfoRight2 = _interopRequireDefault(_NotificationInfoRight);

var _NotificationInfoLeft = require('./NotificationInfoLeft');

var _NotificationInfoLeft2 = _interopRequireDefault(_NotificationInfoLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NotificationInfo = function NotificationInfo(_ref) {
  var rightText = _ref.rightText,
      leftText = _ref.leftText,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['rightText', 'leftText', 'className']);

  var classes = (0, _classnames2.default)('drawer-pf-notification-info', className);

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement(_NotificationInfoLeft2.default, { text: leftText }),
    _react2.default.createElement(_NotificationInfoRight2.default, { text: rightText })
  );
};
NotificationInfo.propTypes = {
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** leftText and rightText Strings */
  leftText: _propTypes2.default.string,
  rightText: _propTypes2.default.string
};
NotificationInfo.defaultProps = {
  className: '',
  leftText: '',
  rightText: ''
};

exports.default = NotificationInfo;