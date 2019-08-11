'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('../../../Cards/Card');

var _Card2 = _interopRequireDefault(_Card);

var _LoginCardHeader = require('./LoginCardHeader');

var _LoginCardHeader2 = _interopRequireDefault(_LoginCardHeader);

var _LoginLanguagePicker = require('./LoginLanguagePicker');

var _LoginLanguagePicker2 = _interopRequireDefault(_LoginLanguagePicker);

var _LoginCardWithValidation = require('./LoginCardWithValidation');

var _LoginCardWithValidation2 = _interopRequireDefault(_LoginCardWithValidation);

var _LoginCardForm = require('./LoginCardForm');

var _LoginCardForm2 = _interopRequireDefault(_LoginCardForm);

var _LoginCardSignUp = require('./LoginCardSignUp');

var _LoginCardSignUp2 = _interopRequireDefault(_LoginCardSignUp);

var _LoginCardInput = require('./LoginCardInput');

var _LoginCardInput2 = _interopRequireDefault(_LoginCardInput);

var _LoginCardSettings = require('./LoginCardSettings');

var _LoginCardSettings2 = _interopRequireDefault(_LoginCardSettings);

var _LoginFormError = require('./LoginFormError');

var _LoginFormError2 = _interopRequireDefault(_LoginFormError);

var _LoginCardForgotPassword = require('./LoginCardForgotPassword');

var _LoginCardForgotPassword2 = _interopRequireDefault(_LoginCardForgotPassword);

var _LoginCardRememberMe = require('./LoginCardRememberMe');

var _LoginCardRememberMe2 = _interopRequireDefault(_LoginCardRememberMe);

var _LoginCardSocialLink = require('./LoginCardSocialLink');

var _LoginCardSocialLink2 = _interopRequireDefault(_LoginCardSocialLink);

var _LoginCardSocialSection = require('./LoginCardSocialSection');

var _LoginCardSocialSection2 = _interopRequireDefault(_LoginCardSocialSection);

var _LoginCardSocialColumns = require('./LoginCardSocialColumns');

var _LoginCardSocialColumns2 = _interopRequireDefault(_LoginCardSocialColumns);

var _SocialLoginCard = require('./SocialLoginCard');

var _SocialLoginCard2 = _interopRequireDefault(_SocialLoginCard);

var _BasicLoginCardLayout = require('./BasicLoginCardLayout');

var _BasicLoginCardLayout2 = _interopRequireDefault(_BasicLoginCardLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoginCard = function LoginCard(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _Card2.default,
    props,
    children
  );
};

LoginCard.propTypes = {
  /** Children nodes. */
  children: _propTypes2.default.node
};

LoginCard.defaultProps = {
  children: null
};

LoginCard.Header = _LoginCardHeader2.default;
LoginCard.LanguagePicker = _LoginLanguagePicker2.default;
LoginCard.WithValidation = _LoginCardWithValidation2.default;
LoginCard.Form = _LoginCardForm2.default;
LoginCard.SignUp = _LoginCardSignUp2.default;
LoginCard.Input = _LoginCardInput2.default;
LoginCard.Settings = _LoginCardSettings2.default;
LoginCard.FormError = _LoginFormError2.default;
LoginCard.ForgotPassword = _LoginCardForgotPassword2.default;
LoginCard.RememberMe = _LoginCardRememberMe2.default;
LoginCard.Social = _SocialLoginCard2.default;
LoginCard.SocialLink = _LoginCardSocialLink2.default;
LoginCard.SocialSection = _LoginCardSocialSection2.default;
LoginCard.SocialColumns = _LoginCardSocialColumns2.default;
LoginCard.BasicLayout = _BasicLoginCardLayout2.default;

exports.default = LoginCard;