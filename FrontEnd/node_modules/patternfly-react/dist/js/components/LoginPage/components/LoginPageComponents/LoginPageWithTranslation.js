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

var _LoginCard = require('../LoginCardComponents/LoginCard');

var _LoginCard2 = _interopRequireDefault(_LoginCard);

var _LoginCardHeader = require('../LoginCardComponents/LoginCardHeader');

var _LoginCardHeader2 = _interopRequireDefault(_LoginCardHeader);

var _LoginPageContainer = require('./LoginPageContainer');

var _LoginPageContainer2 = _interopRequireDefault(_LoginPageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPageWithTranslation = function (_React$Component) {
  _inherits(LoginPageWithTranslation, _React$Component);

  function LoginPageWithTranslation(props) {
    _classCallCheck(this, LoginPageWithTranslation);

    var _this = _possibleConstructorReturn(this, (LoginPageWithTranslation.__proto__ || Object.getPrototypeOf(LoginPageWithTranslation)).call(this, props));

    _this.onLanguageChange = function (e) {
      var newLanguage = e.target.attributes.value.value;
      if (!newLanguage || _this.state.language === newLanguage) {
        return;
      }
      _this.switchToLanguage(newLanguage);
    };

    _this.onPasswordChange = function (e) {
      var card = _this.props.card;

      card.form.passwordField.onChange && card.form.passwordField.onChange(e);
      _this.setState({ passwordValue: e.target.value });
    };

    _this.onUsernameChange = function (e) {
      var card = _this.props.card;

      card.form.usernameField.onChange && card.form.usernameField.onChange(e);
      _this.setState({ usernameValue: e.target.value });
    };

    _this.getDefaultPropsToPass = function () {
      var card = _this.props.card;

      return {
        card: _extends({}, card, {
          onLanguageChange: function onLanguageChange(e) {
            return _this.onLanguageChange(e);
          },
          form: _extends({}, card.form, {
            usernameField: _extends({}, card.form.usernameField, {
              value: _this.state.usernameValue,
              onChange: function onChange(e) {
                return _this.onUsernameChange(e);
              }
            }),
            passwordField: _extends({}, card.form.passwordField, {
              value: _this.state.passwordValue,
              onChange: function onChange(e) {
                return _this.onPasswordChange(e);
              }
            })
          })
        })
      };
    };

    _this.switchToLanguage = function (language) {
      var _this$props = _this.props,
          container = _this$props.container,
          card = _this$props.card,
          header = _this$props.header;

      var languageFile = container.translations[language];
      var translatedProps = _extends({}, _this.props, {
        container: _extends({}, container, {
          alert: _extends({}, header.alert, {
            message: languageFile.header.alert
          })
        }),
        header: _extends({}, header, {
          logoTitle: languageFile.header.logo,
          caption: languageFile.header.caption
        }),
        footerLinks: languageFile.footerLinks,
        card: _extends({}, card, {
          title: languageFile.card.header.title,
          selectedLanguage: languageFile.card.header.selectedLanguage,
          availableLanguages: languageFile.card.header.availableLanguages,
          onLanguageChange: function onLanguageChange(e) {
            return _this.onLanguageChange(e);
          },
          signUp: {
            label: languageFile.card.signUp.label,
            link: _extends({}, card.signUp.link, {
              children: languageFile.card.signUp.link.label
            })
          },
          form: _extends({}, card.form, {
            submitError: languageFile.card.form.error,
            usernameField: _extends({}, card.form.usernameField, {
              onChange: function onChange(e) {
                return _this.onUsernameChange(e);
              },
              value: _this.state.usernameValue,
              placeholder: languageFile.card.usernameField.placeholder,
              errors: languageFile.card.usernameField.errors
            }),
            passwordField: _extends({}, card.form.passwordField, {
              onChange: function onChange(e) {
                return _this.onPasswordChange(e);
              },
              value: _this.state.passwordValue,
              placeholder: languageFile.card.passwordField.placeholder,
              errors: languageFile.card.passwordField.errors,
              warnings: languageFile.card.passwordField.warnings
            }),
            submitText: languageFile.card.form.submitText,
            rememberMe: _extends({}, card.rememberMe, {
              label: languageFile.card.rememberMe
            }),
            forgotPassword: _extends({}, card.forgotPassword, {
              label: languageFile.card.forgotPassword
            })
          })
        })
      });

      _this.setState({ translatedProps: translatedProps, language: language });
    };

    var _props$card = props.card,
        selectedLanguage = _props$card.selectedLanguage,
        availableLanguages = _props$card.availableLanguages;

    _this.state = {
      language: selectedLanguage && selectedLanguage.value || availableLanguages && availableLanguages[0] && availableLanguages[0].value,
      passwordValue: '',
      usernameValue: '',
      translatedProps: {}
    };
    return _this;
  }

  _createClass(LoginPageWithTranslation, [{
    key: 'render',
    value: function render() {
      var newProps = _extends({}, this.props, this.getDefaultPropsToPass(), this.state.translatedProps);

      return _react2.default.cloneElement(this.props.children, newProps);
    }
  }]);

  return LoginPageWithTranslation;
}(_react2.default.Component);

LoginPageWithTranslation.propTypes = {
  card: _propTypes2.default.shape(_extends({}, _LoginCard2.default.LanguagePicker.propTypes, _LoginCard2.default.Form.propTypes, _LoginCard2.default.SignUp.propTypes, _LoginCard2.default.RememberMe.propTypes, _LoginCard2.default.ForgotPassword.propTypes)),
  header: _propTypes2.default.shape(_extends({}, _LoginCardHeader2.default.propTypes)),
  container: _propTypes2.default.shape(_extends({}, _LoginPageContainer2.default.propTypes)),
  children: _propTypes2.default.node.isRequired
};

LoginPageWithTranslation.defaultProps = {
  card: _extends({}, _LoginCard2.default.LanguagePicker.defaultProps, _LoginCard2.default.Form.defaultProps, _LoginCard2.default.SignUp.defaultProps, _LoginCard2.default.RememberMe.defaultProps, _LoginCard2.default.ForgotPassword.defaultProps),
  header: _extends({}, _LoginCardHeader2.default.defaultProps),
  container: _extends({}, _LoginPageContainer2.default.defaultProps)
};

exports.default = LoginPageWithTranslation;