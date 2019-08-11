var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'bootstrap-slider-without-jquery';

var orientation = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

var BootstrapSlider = function (_React$Component) {
  _inherits(BootstrapSlider, _React$Component);

  function BootstrapSlider() {
    _classCallCheck(this, BootstrapSlider);

    return _possibleConstructorReturn(this, (BootstrapSlider.__proto__ || Object.getPrototypeOf(BootstrapSlider)).apply(this, arguments));
  }

  _createClass(BootstrapSlider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.slider = new Slider(this.sliderDiv, _extends({}, this.props));

      var onSlide = function onSlide(value) {
        _this2.props.onSlide(value);
        _this2.slider.setValue(value);
      };

      this.slider.on('slide', onSlide);
      this.slider.on('slideStop', onSlide);
    }

    // Instead of rendering the slider element again and again,
    // we took advantage of the bootstrap-slider library
    // and only update the new value or format when new props arrive.

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.slider.setValue(nextProps.value);
      // Sets the tooltip format.
      this.slider.setAttribute('formatter', nextProps.formatter);
      // Adjust the tooltip to "sit" ontop of the slider's handle. #LibraryBug
      // check
      if (this.props.orientation === orientation.horizontal) {
        this.slider.tooltip.style.marginLeft = '-' + this.slider.tooltip.offsetWidth / 2 + 'px';
        if (this.props.ticks_labels && this.slider.tickLabelContainer) {
          this.slider.tickLabelContainer.style.marginTop = '0px';
        }
      } else {
        this.slider.tooltip.style.marginTop = '-' + this.slider.tooltip.offsetHeight / 2 + 'px';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement('input', {
        className: 'slider-pf',
        type: 'range',
        ref: function ref(input) {
          _this3.sliderDiv = input;
        }
      });
    }
  }]);

  return BootstrapSlider;
}(React.Component);

BootstrapSlider.propTypes = {
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]).isRequired,
  formatter: PropTypes.func,
  onSlide: PropTypes.func,
  orientation: PropTypes.string,
  ticks_labels: PropTypes.array
};

BootstrapSlider.defaultProps = {
  formatter: function formatter(v) {
    return v;
  },
  onSlide: function onSlide(event) {
    return event;
  },
  orientation: 'horizontal',
  ticks_labels: []
};

export default BootstrapSlider;