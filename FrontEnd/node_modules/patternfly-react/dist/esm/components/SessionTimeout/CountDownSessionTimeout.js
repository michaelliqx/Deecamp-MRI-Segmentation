var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../../common/Timer';
import SessionTimeout from './SessionTimeout';

var msTimes = {
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000
};

var CountDownSessionTimeout = function (_React$Component) {
  _inherits(CountDownSessionTimeout, _React$Component);

  function CountDownSessionTimeout(props) {
    _classCallCheck(this, CountDownSessionTimeout);

    var _this = _possibleConstructorReturn(this, (CountDownSessionTimeout.__proto__ || Object.getPrototypeOf(CountDownSessionTimeout)).call(this, props));

    _this.timer = new Timer(function () {}, -1);
    _this.state = { timeLeft: 0 };
    return _this;
  }

  _createClass(CountDownSessionTimeout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.timeLeft < this.props.displayBefore) {
        this.setTimeout('dialog');
      } else {
        this.setTimeout('init');
      }
    }
  }, {
    key: 'componentWillUnount',
    value: function componentWillUnount() {
      this.timer.clearTimer();
    }
  }, {
    key: 'setTimeout',
    value: function setTimeout(mode) {
      var _this2 = this;

      var _props = this.props,
          sessionTime = _props.sessionTime,
          timeLeft = _props.timeLeft,
          displayBefore = _props.displayBefore,
          units = _props.units;

      switch (mode) {
        case 'logout':
          {
            this.setState(function () {
              return { timeLeft: 0 };
            });
            this.timer.clearTimer();
            break;
          }
        case 'continue':
          {
            this.setState(function () {
              return { timeLeft: sessionTime };
            });
            this.timer.startTimer(function () {
              return _this2.setTimeout('dialog');
            }, (sessionTime - displayBefore) * msTimes[units]);
            break;
          }
        case 'dialog':
          {
            var leftNow = timeLeft < displayBefore ? timeLeft : displayBefore;
            this.setState(function () {
              return { timeLeft: leftNow };
            });
            this.timer.startTimer(function () {
              return _this2.setTimeout('logout');
            }, leftNow * msTimes[units]);
            break;
          }
        case 'init':
          {
            this.setState(function () {
              return { timeLeft: timeLeft };
            });
            this.timer.startTimer(function () {
              return _this2.setTimeout('dialog');
            }, (timeLeft - displayBefore) * msTimes[units]);
            break;
          }
        default:
          {
            break;
          }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(SessionTimeout, {
        logoutFnc: function logoutFnc() {
          return _this3.setTimeout('logout');
        },
        continueFnc: function continueFnc() {
          return _this3.setTimeout('continue');
        },
        displayBefore: this.props.displayBefore,
        timeLeft: this.state.timeLeft,
        secondaryContent: this.props.secondaryContent
      });
    }
  }]);

  return CountDownSessionTimeout;
}(React.Component);

CountDownSessionTimeout.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  sessionTime: PropTypes.number.isRequired,
  displayBefore: PropTypes.number,
  units: PropTypes.oneOf(Object.keys(msTimes)),
  secondaryContent: PropTypes.node
};

CountDownSessionTimeout.defaultProps = {
  displayBefore: 10,
  units: 'seconds',
  secondaryContent: React.createElement(
    'p',
    null,
    'You will be logged out in 10 seconds.'
  )
};

export default CountDownSessionTimeout;