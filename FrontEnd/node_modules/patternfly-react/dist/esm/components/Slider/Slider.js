var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import BootstrapSlider from './BootstrapSlider';
import { noop } from '../../common/helpers';
import { Icon } from '../Icon';
import { ControlLabel, FormControl } from '../Form';
import Boundaries from './Boundaries';
import DropdownMenu from './DropdownMenu';

var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onSlide = function (value) {
      _this.setState({ value: value }, function () {
        return _this.props.onSlide(value);
      });
    };

    _this.onInputChange = function (event) {
      var newValue = parseInt(event.target.value || 0, 10);
      _this.setState({ value: newValue }, function () {
        return _this.props.onSlide(newValue);
      });
    };

    _this.onFormatChange = function (format) {
      _this.setState({ tooltipFormat: format });
    };

    _this.formatter = function (value) {
      return value + ' ' + _this.state.tooltipFormat;
    };

    _this.state = {
      value: _this.props.value,
      tooltipFormat: _this.props.dropdownList && _this.props.dropdownList[0] || _this.props.inputFormat
    };
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value) {
        this.onSlide(this.props.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var label = null;
      var sliderClass = 'col-xs-12 col-sm-12 col-md-12';
      var labelClass = 'col-xs-2 col-sm-2 col-md-2';
      if (this.props.label || this.props.icon) {
        sliderClass = 'col-xs-10 col-sm-10 col-md-10';
        label = this.props.icon ? React.createElement(Icon, _extends({ className: labelClass }, this.props.icon)) : React.createElement(
          ControlLabel,
          { htmlFor: this.props.id, bsClass: labelClass },
          this.props.label
        );
      }

      var formatElement = void 0;

      if (this.props.inputFormat) {
        formatElement = React.createElement(
          'span',
          null,
          this.props.inputFormat
        );
      }

      if (this.props.dropdownList) {
        formatElement = React.createElement(DropdownMenu, _extends({}, this.props, { onFormatChange: this.onFormatChange, title: this.state.tooltipFormat }));
      }

      var inputElement = this.props.input && React.createElement(FormControl, {
        bsClass: 'slider-input-pf',
        type: 'number',
        value: this.state.value,
        min: this.props.min,
        max: this.props.max,
        onChange: this.onInputChange
      });

      var BSSlider = React.createElement(BootstrapSlider, _extends({}, this.props, { formatter: this.formatter, value: this.state.value, onSlide: this.onSlide }));

      return React.createElement(
        'div',
        null,
        label,
        React.createElement(
          'div',
          { className: sliderClass },
          React.createElement(
            Boundaries,
            _extends({ slider: BSSlider }, this.props),
            inputElement,
            formatElement
          )
        )
      );
    }
  }]);

  return Slider;
}(React.Component);

Slider.propTypes = {
  id: PropTypes.string,
  orientation: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  toolTip: PropTypes.bool,
  onSlide: PropTypes.func,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  icon: PropTypes.object,
  input: PropTypes.bool,
  sliderClass: PropTypes.string,
  dropdownList: PropTypes.array,
  inputFormat: PropTypes.string
};

Slider.defaultProps = {
  id: null,
  orientation: 'horizontal',
  min: 0,
  max: 100,
  value: 0,
  step: 1,
  toolTip: false,
  onSlide: noop,
  label: null,
  labelClass: null,
  input: false,
  sliderClass: null,
  icon: null,
  dropdownList: null,
  inputFormat: ''
};

export default Slider;