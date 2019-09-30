var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import 'patternfly/dist/js/patternfly-settings';
import 'patternfly/dist/js/patternfly-settings-charts';
import Break from 'breakjs';

var _window = window,
    patternfly = _window.patternfly;

var c3ChartDefaults = patternfly.c3ChartDefaults();

var mockLayout = {
  is: function is(layout) {
    return layout === 'desktop';
  },
  addChangeListener: function addChangeListener() {},
  removeChangeListener: function removeChangeListener() {}
};

var layout = process.env.NODE_ENV === 'test' ? mockLayout : Break(_extends({ mobile: 0 }, patternfly.pfBreakpoints));

export { patternfly, c3ChartDefaults, layout };