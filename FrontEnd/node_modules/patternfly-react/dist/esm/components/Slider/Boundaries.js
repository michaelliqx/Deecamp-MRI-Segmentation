import React from 'react';
import PropTypes from 'prop-types';

var Boundaries = function Boundaries(props) {
  var children = props.children,
      min = props.min,
      max = props.max,
      reversed = props.reversed,
      showBoundaries = props.showBoundaries,
      slider = props.slider;

  var minElement = React.createElement(
    'b',
    null,
    min
  );
  var maxElement = React.createElement(
    'b',
    null,
    max
  );
  var leftBoundary = null;
  var rightBoundary = null;
  if (showBoundaries) {
    if (reversed) {
      leftBoundary = maxElement;
      rightBoundary = minElement;
    } else {
      leftBoundary = minElement;
      rightBoundary = maxElement;
    }
  }

  return React.createElement(
    'div',
    { className: 'slider-pf' },
    leftBoundary,
    slider,
    rightBoundary,
    children
  );
};

Boundaries.propTypes = {
  children: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
  reversed: PropTypes.bool,
  showBoundaries: PropTypes.bool,
  slider: PropTypes.object.isRequired
};

Boundaries.defaultProps = {
  children: [],
  min: 0,
  max: 100,
  reversed: false,
  showBoundaries: false
};

export default Boundaries;