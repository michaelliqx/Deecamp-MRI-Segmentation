'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../index');

var _CountDownSessionTimeout = require('./CountDownSessionTimeout');

var _CountDownSessionTimeout2 = _interopRequireDefault(_CountDownSessionTimeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SessionTimeout = function SessionTimeout(props) {
  return _react2.default.createElement(_index.MessageDialog, {
    show: props.timeLeft > 0 && props.timeLeft <= props.displayBefore,
    primaryActionButtonContent: props.continueContent,
    primaryAction: props.continueFnc,
    secondaryActionButtonContent: props.logoutContent,
    secondaryAction: props.logoutFnc,
    primaryContent: props.primaryContent,
    secondaryContent: props.secondaryContent,
    onHide: props.logoutFnc,
    icon: _react2.default.createElement(_index.Icon, { type: 'pf', name: 'warning-triangle-o' })
  });
};

SessionTimeout.propTypes = {
  timeLeft: _propTypes2.default.number.isRequired,
  displayBefore: _propTypes2.default.number,
  continueContent: _propTypes2.default.node,
  continueFnc: _propTypes2.default.func.isRequired,
  logoutContent: _propTypes2.default.node,
  logoutFnc: _propTypes2.default.func.isRequired,
  primaryContent: _propTypes2.default.node,
  secondaryContent: _propTypes2.default.node
};

SessionTimeout.defaultProps = {
  displayBefore: 10,
  continueContent: 'Continue Session',
  logoutContent: 'Log Out',
  primaryContent: _react2.default.createElement(
    'p',
    { className: 'lead' },
    'Your session is about to expire'
  ),
  secondaryContent: _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'p',
      null,
      'You will be logged out in a few seconds.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'To continue your session click on the Continue Session button.'
    )
  )
};

SessionTimeout.CountDown = _CountDownSessionTimeout2.default;

exports.default = SessionTimeout;