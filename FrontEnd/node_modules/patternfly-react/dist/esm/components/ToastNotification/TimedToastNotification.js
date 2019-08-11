var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../../common/Timer';
import ToastNotification from './ToastNotification';
import { Alert } from '../Alert';

/**
 * TimedToastNotification Component for Patternfly React
 */

var TimedToastNotification = function (_React$Component) {
  _inherits(TimedToastNotification, _React$Component);

  function TimedToastNotification() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimedToastNotification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimedToastNotification.__proto__ || Object.getPrototypeOf(TimedToastNotification)).call.apply(_ref, [this].concat(args))), _this), _this.onMouseEnter = function () {
      var onMouseEnter = _this.props.onMouseEnter;

      onMouseEnter && onMouseEnter();
    }, _this.onMouseLeave = function () {
      var onMouseLeave = _this.props.onMouseLeave;

      onMouseLeave && onMouseLeave();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimedToastNotification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          paused = _props.paused,
          persistent = _props.persistent,
          onDismiss = _props.onDismiss,
          timerdelay = _props.timerdelay;


      if (!persistent) {
        this.timer = new Timer(onDismiss, timerdelay);
        this.timer.startTimer();
      }

      /** if we are paused on mount, then clear the timer
       * after having initialized with the correct delay */
      if (paused) {
        this.timer && this.timer.clearTimer();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      /**
       * If paused prop changes, update our timer
       */
      if (nextProps.paused !== this.props.paused) {
        if (nextProps.paused) {
          this.timer && this.timer.clearTimer();
        } else {
          this.timer && this.timer.startTimer();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.timer && this.timer.clearTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          type = _props2.type,
          onDismiss = _props2.onDismiss;
      var onMouseEnter = this.onMouseEnter,
          onMouseLeave = this.onMouseLeave;


      var toastProps = {
        className: className,
        type: type,
        onDismiss: onDismiss,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave
      };

      return React.createElement(
        ToastNotification,
        toastProps,
        children
      );
    }
  }]);

  return TimedToastNotification;
}(React.Component);

// WARNING: This should be kept consistent with ToastNotification.propTypes


TimedToastNotification.propTypes = _extends({}, Alert.propTypes, {
  /** pauses notification from dismissing */
  paused: PropTypes.bool,
  /** persistent keeps the notification up endlessly until closed */
  persistent: PropTypes.bool,
  /** timer delay until dismiss */
  timerdelay: PropTypes.number,
  /** onMouseEnter callback */
  onMouseEnter: PropTypes.func,
  /** onMouseLeave callback */
  onMouseLeave: PropTypes.func
});
// WARNING: This should be kept consistent with ToastNotification.defaultProps
TimedToastNotification.defaultProps = _extends({}, Alert.defaultProps, {
  paused: false,
  timerdelay: 8000
});

TimedToastNotification.TOAST_NOTIFICATION_TYPES = [].concat(_toConsumableArray(Alert.ALERT_TYPES));

TimedToastNotification.displayName = 'TimedToastNotification';

export default TimedToastNotification;