'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BootstrapSlider = require('./BootstrapSlider');

var _BootstrapSlider2 = _interopRequireDefault(_BootstrapSlider);

var _helpers = require('../../common/helpers');

var _Icon = require('../Icon');

var _Form = require('../Form');

var _Boundaries = require('./Boundaries');

var _Boundaries2 = _interopRequireDefault(_Boundaries);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        label = this.props.icon ? _react2.default.createElement(_Icon.Icon, _extends({ className: labelClass }, this.props.icon)) : _react2.default.createElement(
          _Form.ControlLabel,
          { htmlFor: this.props.id, bsClass: labelClass },
          this.props.label
        );
      }

      var formatElement = void 0;

      if (this.props.inputFormat) {
        formatElement = _react2.default.createElement(
          'span',
          null,
          this.props.inputFormat
        );
      }

      if (this.props.dropdownList) {
        formatElement = _react2.default.createElement(_DropdownMenu2.default, _extends({}, this.props, { onFormatChange: this.onFormatChange, title: this.state.tooltipFormat }));
      }

      var inputElement = this.props.input && _react2.default.createElement(_Form.FormControl, {
        bsClass: 'slider-input-pf',
        type: 'number',
        value: this.state.value,
        min: this.props.min,
        max: this.props.max,
        onChange: this.onInputChange
      });

      var BSSlider = _react2.default.createElement(_BootstrapSlider2.default, _extends({}, this.props, { formatter: this.formatter, value: this.state.value, onSlide: this.onSlide }));

      return _react2.default.createElement(
        'div',
        null,
        label,
        _react2.default.createElement(
          'div',
          { className: sliderClass },
          _react2.default.createElement(
            _Boundaries2.default,
            _extends({ slider: BSSlider }, this.props),
            inputElement,
            formatElement
          )
        )
      );
    }
  }]);

  return Slider;
}(_react2.default.Component);

Slider.propTypes = {
  id: _propTypes2.default.string,
  orientation: _propTypes2.default.string,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  step: _propTypes2.default.number,
  value: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number]),
  toolTip: _propTypes2.default.bool,
  onSlide: _propTypes2.default.func,
  label: _propTypes2.default.string,
  labelClass: _propTypes2.default.string,
  icon: _propTypes2.default.object,
  input: _propTypes2.default.bool,
  sliderClass: _propTypes2.default.string,
  dropdownList: _propTypes2.default.array,
  inputFormat: _propTypes2.default.string
};

Slider.defaultProps = {
  id: null,
  orientation: 'horizontal',
  min: 0,
  max: 100,
  value: 0,
  step: 1,
  toolTip: false,
  onSlide: _helpers.noop,
  label: null,
  labelClass: null,
  input: false,
  sliderClass: null,
  icon: null,
  dropdownList: null,
  inputFormat: ''
};

exports.default = Slider;