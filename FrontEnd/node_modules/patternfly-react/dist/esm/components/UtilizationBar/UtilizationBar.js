import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from '../ProgressBar';
import { OverlayTrigger } from '../OverlayTrigger';
import { Tooltip } from '../Tooltip';
import { labelClasses, mainDivClasses, barStyle } from './helpers';

var randomId = function randomId() {
  return Date.now();
};

var AvailableTooltipFunction = function AvailableTooltipFunction(max, now) {
  return React.createElement(
    Tooltip,
    { id: randomId() },
    'Available ',
    max - now,
    ' %'
  );
};

var UsedTooltipFunction = function UsedTooltipFunction(max, now) {
  return React.createElement(
    Tooltip,
    { id: randomId() },
    'Used ',
    now,
    ' %'
  );
};

var UtilizationBar = function UtilizationBar(_ref) {
  var min = _ref.min,
      max = _ref.max,
      now = _ref.now,
      availableTooltipFunction = _ref.availableTooltipFunction,
      usedTooltipFunction = _ref.usedTooltipFunction,
      descriptionPlacementTop = _ref.descriptionPlacementTop,
      description = _ref.description,
      thresholdWarning = _ref.thresholdWarning,
      thresholdError = _ref.thresholdError,
      label = _ref.label,
      className = _ref.className;
  return React.createElement(
    'div',
    { className: mainDivClasses(!descriptionPlacementTop, className, description, label) },
    React.createElement(
      'div',
      { className: descriptionPlacementTop ? null : 'progress-bar' },
      label && React.createElement(
        'span',
        { className: labelClasses(descriptionPlacementTop) },
        label
      ),
      description && React.createElement(
        'div',
        { className: 'progress-description label-text' },
        description
      )
    ),
    React.createElement(
      'div',
      { className: 'progress' },
      React.createElement(
        OverlayTrigger,
        {
          overlay: usedTooltipFunction(max, now),
          placement: 'top',
          trigger: ['hover', 'focus'],
          rootClose: false
        },
        React.createElement(ProgressBar, {
          bsStyle: barStyle(thresholdWarning, thresholdError, now),
          min: min,
          max: max,
          now: now,
          key: 1,
          isChild: true
        })
      ),
      React.createElement(
        OverlayTrigger,
        {
          overlay: availableTooltipFunction(max, now),
          placement: 'top',
          trigger: ['hover', 'focus'],
          rootClose: false
        },
        React.createElement(ProgressBar, {
          min: min,
          max: max,
          now: max - now,
          key: 2,
          bsClass: 'progress-bar progress-bar-remaining',
          isChild: true
        })
      )
    )
  );
};

UtilizationBar.propTypes = {
  /** Minimal value */
  min: PropTypes.number,
  /** Maximal value */
  max: PropTypes.number,
  /** Current value */
  now: PropTypes.number.isRequired,
  /** Threshold value. Bar will change value to orange if it's surpassed. */
  thresholdWarning: PropTypes.number,
  /** Threshold value. Bar will change value to red if it's surpassed.  */
  thresholdError: PropTypes.number,
  /** Function that renders tooltip for available part of bar. Takes params max and now. */
  availableTooltipFunction: PropTypes.func,
  /** Function that renders tooltip for used part of bar. Takes params max and now. */
  usedTooltipFunction: PropTypes.func,
  /** Description that is displayed on the right side */
  description: PropTypes.node,
  /** Units */
  label: PropTypes.node,
  /** If set labels will be placed above utilization bar */
  descriptionPlacementTop: PropTypes.bool,
  /** User's custom classes */
  className: PropTypes.string
};

UtilizationBar.defaultProps = {
  min: 0,
  max: 100,
  availableTooltipFunction: AvailableTooltipFunction,
  usedTooltipFunction: UsedTooltipFunction,
  descriptionPlacementTop: false,
  thresholdWarning: null,
  thresholdError: null,
  description: null,
  label: null,
  className: null
};

export default UtilizationBar;