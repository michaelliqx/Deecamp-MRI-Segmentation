import React from 'react';
import PropTypes from 'prop-types';
import { Icon, MessageDialog } from '../../index';
import CountDownSessionTimeout from './CountDownSessionTimeout';

var SessionTimeout = function SessionTimeout(props) {
  return React.createElement(MessageDialog, {
    show: props.timeLeft > 0 && props.timeLeft <= props.displayBefore,
    primaryActionButtonContent: props.continueContent,
    primaryAction: props.continueFnc,
    secondaryActionButtonContent: props.logoutContent,
    secondaryAction: props.logoutFnc,
    primaryContent: props.primaryContent,
    secondaryContent: props.secondaryContent,
    onHide: props.logoutFnc,
    icon: React.createElement(Icon, { type: 'pf', name: 'warning-triangle-o' })
  });
};

SessionTimeout.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  displayBefore: PropTypes.number,
  continueContent: PropTypes.node,
  continueFnc: PropTypes.func.isRequired,
  logoutContent: PropTypes.node,
  logoutFnc: PropTypes.func.isRequired,
  primaryContent: PropTypes.node,
  secondaryContent: PropTypes.node
};

SessionTimeout.defaultProps = {
  displayBefore: 10,
  continueContent: 'Continue Session',
  logoutContent: 'Log Out',
  primaryContent: React.createElement(
    'p',
    { className: 'lead' },
    'Your session is about to expire'
  ),
  secondaryContent: React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'p',
      null,
      'You will be logged out in a few seconds.'
    ),
    React.createElement(
      'p',
      null,
      'To continue your session click on the Continue Session button.'
    )
  )
};

SessionTimeout.CountDown = CountDownSessionTimeout;

export default SessionTimeout;