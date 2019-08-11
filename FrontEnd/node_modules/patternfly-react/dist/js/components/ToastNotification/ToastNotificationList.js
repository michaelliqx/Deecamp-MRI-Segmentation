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

var _helpers = require('../../common/helpers');

var _TimedToastNotification = require('./TimedToastNotification');

var _TimedToastNotification2 = _interopRequireDefault(_TimedToastNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ToastNotificationList Component for Patternfly React
 */
var ToastNotificationList = function (_React$Component) {
  _inherits(ToastNotificationList, _React$Component);

  function ToastNotificationList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToastNotificationList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToastNotificationList.__proto__ || Object.getPrototypeOf(ToastNotificationList)).call.apply(_ref, [this].concat(args))), _this), _this.state = { paused: false }, _this.onMouseEnter = function () {
      _this.setState({ paused: true });
      var onMouseEnter = _this.props.onMouseEnter;

      onMouseEnter();
    }, _this.onMouseLeave = function () {
      _this.setState({ paused: false });
      var onMouseLeave = _this.props.onMouseLeave;

      onMouseLeave();
    }, _this.onMouseOver = function () {
      _this.setState({ paused: true });
      var onMouseOver = _this.props.onMouseOver;

      onMouseOver();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToastNotificationList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({ paused: false });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var paused = this.state.paused;

      return _react2.default.Children.map(this.props.children, function (child) {
        if ((0, _helpers.hasDisplayName)(child, _TimedToastNotification2.default.displayName)) {
          /**
           * If any of the notifications are hovered, pause
           * all child notifications from dismissing
           */
          return _react2.default.cloneElement(child, {
            paused: paused
          });
        }
        return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;

      var classes = (0, _classnames2.default)('toast-notifications-list-pf', className);

      return _react2.default.createElement(
        'div',
        {
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave,
          onMouseOver: this.onMouseOver,
          onFocus: this.onMouseOver,
          className: classes
        },
        this.renderChildren()
      );
    }
  }]);

  return ToastNotificationList;
}(_react2.default.Component);

ToastNotificationList.propTypes = {
  /** additional notification list classes */
  className: _propTypes2.default.string,
  /** onMouseEnter callback */
  onMouseEnter: _propTypes2.default.func,
  /** onMouseLeave callback */
  onMouseLeave: _propTypes2.default.func,
  /** onMouseOver callback */
  onMouseOver: _propTypes2.default.func,
  /** children nodes  */
  children: _propTypes2.default.node
};
ToastNotificationList.defaultProps = {
  className: '',
  onMouseEnter: _helpers.noop,
  onMouseLeave: _helpers.noop,
  onMouseOver: _helpers.noop,
  children: null
};
exports.default = ToastNotificationList;