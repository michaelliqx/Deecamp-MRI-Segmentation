var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { KEY_CODES } from '../../common/helpers';
import { default as InfoTipToggle } from './InfoTipToggle';
import { default as InfoTipMenu } from './InfoTipMenu';
import { default as InfoTipMenuFooter } from './InfoTipMenuFooter';
import { default as InfoTipMenuItemIcon } from './InfoTipMenuItemIcon';

var InfoTip = function (_React$Component) {
  _inherits(InfoTip, _React$Component);

  function InfoTip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InfoTip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfoTip.__proto__ || Object.getPrototypeOf(InfoTip)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: false, footerFocused: false }, _this.handleEnterKeyDown = function (event) {
      _this.setState({ open: !_this.state.open });
      event.preventDefault();
    }, _this.handleTabKeyDown = function (event) {
      if (_this.state.footerFocused) {
        _this.setState({ open: false, footerFocused: false });
      } else {
        _this.setState({ footerFocused: true });
      }
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    }, _this.handleKeyDown = function (event) {
      if (event.shiftKey && event.keyCode) {
        return _this.handleBackFocus();
      }
      switch (event.keyCode) {
        case KEY_CODES.ENTER_KEY:
          return _this.handleEnterKeyDown(event);
        case KEY_CODES.TAB_KEY:
          return _this.handleTabKeyDown(event);
        case KEY_CODES.ESCAPE_KEY:
          return _this.setState({ open: false });
        default:
          return null;
      }
    }, _this.handleBackFocus = function () {
      if (_this.state.open) {
        _this.setState({ open: false });
      }
    }, _this.handleClick = function (event) {
      event.preventDefault();
      _this.setState({ open: !_this.state.open });
    }, _this.handleBlur = function (event) {
      if (event && event.relatedTarget) {
        event.relatedTarget.click();
      }
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InfoTip, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onToggle = _props.onToggle,
          props = _objectWithoutProperties(_props, ['children', 'onToggle']);

      return React.createElement(
        Dropdown,
        _extends({
          componentClass: 'li',
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown,
          onToggle: this.handleKeyDown,
          open: this.state.open,
          onBlur: this.handleBlur
        }, props),
        children
      );
    }
  }]);

  return InfoTip;
}(React.Component);

InfoTip.propTypes = _extends({}, Dropdown.propTypes, {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
});

InfoTip.Toggle = InfoTipToggle;
InfoTip.Menu = InfoTipMenu;
InfoTip.MenuItemIcon = InfoTipMenuItemIcon;
InfoTip.MenuFooter = InfoTipMenuFooter;

export default InfoTip;