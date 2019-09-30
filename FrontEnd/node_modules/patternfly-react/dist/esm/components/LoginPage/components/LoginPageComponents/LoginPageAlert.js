var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '../../../Alert';
import { noop } from '../../../../common/helpers';

var LoginPageAlert = function (_React$Component) {
  _inherits(LoginPageAlert, _React$Component);

  function LoginPageAlert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoginPageAlert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginPageAlert.__proto__ || Object.getPrototypeOf(LoginPageAlert)).call.apply(_ref, [this].concat(args))), _this), _this.state = { show: _this.props.show }, _this.closeAlert = function (e) {
      _this.props.onDismiss(e);
      if (!_this.state.show) {
        return;
      }
      _this.setState({ show: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoginPageAlert, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          type = _props.type,
          message = _props.message;

      return this.state.show ? React.createElement(
        Alert,
        { type: type, onDismiss: function onDismiss(e) {
            return _this2.closeAlert(e);
          } },
        message
      ) : null;
    }
  }]);

  return LoginPageAlert;
}(React.Component);

LoginPageAlert.propTypes = {
  type: PropTypes.string,
  onDismiss: PropTypes.func,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  show: PropTypes.bool
};

LoginPageAlert.defaultProps = {
  type: 'warning',
  onDismiss: noop,
  message: null,
  show: false
};

export default LoginPageAlert;