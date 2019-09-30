'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _Icon = require('../Icon');

var _Form = require('../Form');

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolbarFind = function (_React$Component) {
  _inherits(ToolbarFind, _React$Component);

  function ToolbarFind() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToolbarFind);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToolbarFind.__proto__ || Object.getPrototypeOf(ToolbarFind)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dropdownShown: false,
      currentValue: ''
    }, _this.onValueKeyPress = function (keyEvent) {
      var onEnter = _this.props.onEnter;
      var currentValue = _this.state.currentValue;


      if (keyEvent.key === 'Enter' && onEnter) {
        onEnter(currentValue);
      }
    }, _this.handleFindNext = function () {
      var currentValue = _this.state.currentValue;
      var onFindNext = _this.props.onFindNext;


      if (onFindNext) {
        onFindNext(currentValue);
      }
    }, _this.handleFindPrevious = function () {
      var currentValue = _this.state.currentValue;
      var onFindPrevious = _this.props.onFindPrevious;


      if (onFindPrevious) {
        onFindPrevious(currentValue);
      }
    }, _this.handleValueChange = function (event) {
      var onChange = _this.props.onChange;


      _this.setState({ currentValue: event.target.value });

      if (onChange) {
        onChange(event.target.value);
      }
    }, _this.hideDropdown = function () {
      _this.setState({ dropdownShown: false });
    }, _this.toggleDropdownShown = function () {
      _this.setState(function (prevState) {
        return { dropdownShown: !prevState.dropdownShown };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToolbarFind, [{
    key: 'renderCounts',
    value: function renderCounts() {
      var currentValue = this.state.currentValue;
      var _props = this.props,
          currentIndex = _props.currentIndex,
          totalCount = _props.totalCount;


      if (currentValue && currentValue !== '') {
        return [_react2.default.createElement(
          'span',
          { className: 'find-pf-nums', key: 'findCountText' },
          currentIndex || 0,
          ' of ',
          totalCount
        ), _react2.default.createElement(
          _Button.Button,
          { bsStyle: 'link', key: 'findPrevious', onClick: this.handleFindPrevious },
          _react2.default.createElement(_Icon.Icon, { type: 'fa', name: 'angle-up' })
        ), _react2.default.createElement(
          _Button.Button,
          { bsStyle: 'link', key: 'findNext', onClick: this.handleFindNext },
          _react2.default.createElement(_Icon.Icon, { type: 'fa', name: 'angle-down' })
        )];
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          dropdownShown = _state.dropdownShown,
          currentValue = _state.currentValue;
      var _props2 = this.props,
          className = _props2.className,
          placeholder = _props2.placeholder;


      var classes = (0, _classnames2.default)('form-group toolbar-pf-find', className);

      var dropdownClasses = (0, _classnames2.default)('find-pf-dropdown-container', {
        show: dropdownShown
      });

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(
          _Button.Button,
          { bsStyle: 'link', className: 'btn-find', onClick: this.toggleDropdownShown },
          _react2.default.createElement(_Icon.Icon, { type: 'fa', name: 'search' })
        ),
        _react2.default.createElement(
          'div',
          { className: dropdownClasses },
          _react2.default.createElement(_Form.FormControl, {
            type: 'text',
            id: 'find',
            value: currentValue,
            placeholder: placeholder,
            onKeyPress: function onKeyPress(e) {
              return _this2.onValueKeyPress(e);
            },
            onChange: this.handleValueChange
          }),
          _react2.default.createElement(
            'div',
            { className: 'find-pf-buttons' },
            this.renderCounts(),
            _react2.default.createElement(
              _Button.Button,
              { bsStyle: 'link', className: 'btn-find-close', onClick: this.hideDropdown },
              _react2.default.createElement(_Icon.Icon, { type: 'pf', name: 'close' })
            )
          )
        )
      );
    }
  }]);

  return ToolbarFind;
}(_react2.default.Component);

ToolbarFind.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** index of current item */
  currentIndex: _propTypes2.default.number,
  /** total number of items */
  totalCount: _propTypes2.default.number.isRequired,
  /** Placeholder text when empty */
  placeholder: _propTypes2.default.string,
  /** Callback function when user hits the enter key */
  onEnter: _propTypes2.default.func,
  /** Callback function when the find value changes */
  onChange: _propTypes2.default.func,
  /** Callback function when the find next is selected */
  onFindNext: _propTypes2.default.func,
  /** Callback function when the find previous is selected */
  onFindPrevious: _propTypes2.default.func
};

ToolbarFind.defaultProps = {
  className: '',
  currentIndex: 0,
  placeholder: '',
  onEnter: _helpers.noop,
  onChange: _helpers.noop,
  onFindNext: _helpers.noop,
  onFindPrevious: _helpers.noop
};

exports.default = ToolbarFind;