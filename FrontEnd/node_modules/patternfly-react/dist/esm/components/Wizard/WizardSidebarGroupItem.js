var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroupItem } from '../ListGroup';
import { noop } from '../../common/helpers';

/**
 * WizardSidebarGroupItem component for Patternfly React
 */
var WizardSidebarGroupItem = function WizardSidebarGroupItem(_ref) {
  var stepIndex = _ref.stepIndex,
      subStepIndex = _ref.subStepIndex,
      className = _ref.className,
      subStep = _ref.subStep,
      label = _ref.label,
      title = _ref.title,
      activeSubStep = _ref.activeSubStep,
      _onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['stepIndex', 'subStepIndex', 'className', 'subStep', 'label', 'title', 'activeSubStep', 'onClick']);

  var classes = classNames({ active: '' + subStep === '' + activeSubStep }, className);
  return React.createElement(
    ListGroupItem,
    _extends({ className: classes, listItem: true }, props),
    React.createElement(
      'a',
      {
        href: '#',
        onClick: function onClick(e) {
          e.preventDefault();
          _onClick(stepIndex, subStepIndex);
        }
      },
      React.createElement(
        'span',
        { className: 'wizard-pf-substep-number' },
        label
      ),
      React.createElement(
        'span',
        { className: 'wizard-pf-substep-title' },
        title
      )
    )
  );
};
WizardSidebarGroupItem.propTypes = {
  /** The wizard parent step index */
  stepIndex: PropTypes.number.isRequired,
  /** The wizard sub step index */
  subStepIndex: PropTypes.number.isRequired,
  /** Additional css classes */
  className: PropTypes.string,
  /** This wizard sub step name */
  subStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** This wizard sub step label */
  label: PropTypes.string,
  /** This wizard sub step title */
  title: PropTypes.string,
  /** The currently active wizard substep */
  activeSubStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sidebar group item click handler */
  onClick: PropTypes.func
};
WizardSidebarGroupItem.defaultProps = {
  className: '',
  subStep: '',
  label: '',
  title: '',
  activeSubStep: '',
  onClick: noop
};
export default WizardSidebarGroupItem;