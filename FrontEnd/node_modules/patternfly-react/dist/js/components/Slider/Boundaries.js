'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Boundaries = function Boundaries(props) {
  var children = props.children,
      min = props.min,
      max = props.max,
      reversed = props.reversed,
      showBoundaries = props.showBoundaries,
      slider = props.slider;

  var minElement = _react2.default.createElement(
    'b',
    null,
    min
  );
  var maxElement = _react2.default.createElement(
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

  return _react2.default.createElement(
    'div',
    { className: 'slider-pf' },
    leftBoundary,
    slider,
    rightBoundary,
    children
  );
};

Boundaries.propTypes = {
  children: _propTypes2.default.array,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  reversed: _propTypes2.default.bool,
  showBoundaries: _propTypes2.default.bool,
  slider: _propTypes2.default.object.isRequired
};

Boundaries.defaultProps = {
  children: [],
  min: 0,
  max: 100,
  reversed: false,
  showBoundaries: false
};

exports.default = Boundaries;