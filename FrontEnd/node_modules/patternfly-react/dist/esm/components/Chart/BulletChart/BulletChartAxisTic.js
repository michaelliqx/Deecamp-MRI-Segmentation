function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var BulletChartAxisTic = function BulletChartAxisTic(_ref) {
  var className = _ref.className,
      text = _ref.text,
      vertical = _ref.vertical,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['className', 'text', 'vertical', 'value']);

  var bulletChartAxisTicClass = classNames('bullet-chart-pf-axis-tic', className);

  var ticStyle = void 0;
  if (vertical) {
    ticStyle = { bottom: 'calc(' + value + '% - 10px)' };
  } else {
    ticStyle = { left: 'calc(' + value + '% - 15px)' };
  }

  return React.createElement(
    'span',
    { className: bulletChartAxisTicClass, style: ticStyle },
    text || value
  );
};

BulletChartAxisTic.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Vertical axis, default false */
  vertical: PropTypes.bool,
  /** Value for the tic mark */
  value: PropTypes.number.isRequired,
  /** Text for the tic mark, default is the value */
  text: PropTypes.string
};

BulletChartAxisTic.defaultProps = {
  className: '',
  vertical: false,
  text: undefined
};

export default BulletChartAxisTic;