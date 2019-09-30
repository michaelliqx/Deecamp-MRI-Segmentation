import classNames from 'classnames';

export var labelClasses = function labelClasses(top) {
  return classNames({ 'progress-label-top-right': top, 'progress-label-right': !top }, 'pull-right', 'display-inline-block');
};

export var mainDivClasses = function mainDivClasses(onSide, userClasses, description, label) {
  return classNames({
    'progress-container': onSide && description,
    'progress-description-left': onSide && description,
    'progress-label-right': onSide && label
  }, userClasses, 'utilization-bar-pf');
};

export var barStyle = function barStyle(thresholdWarning, thresholdError, now) {
  if (thresholdWarning && thresholdError) {
    var style = 'success';
    if (thresholdWarning <= now) {
      style = 'warning';
    }
    if (thresholdError <= now) {
      style = 'danger';
    }
    return style;
  }
  return null;
};