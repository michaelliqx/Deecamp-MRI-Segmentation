var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton, MenuItem } from '../../../../index';
import { noop } from '../../../../common/helpers';

var LoginLanguagePicker = function (_React$Component) {
  _inherits(LoginLanguagePicker, _React$Component);

  function LoginLanguagePicker(props) {
    _classCallCheck(this, LoginLanguagePicker);

    var _this = _possibleConstructorReturn(this, (LoginLanguagePicker.__proto__ || Object.getPrototypeOf(LoginLanguagePicker)).call(this, props));

    _this.handleClick = function (e) {
      var onLanguageChange = _this.props.onLanguageChange;

      onLanguageChange(e);
      _this.setState({ title: e.target.text });
    };

    var selectedLanguage = props.selectedLanguage,
        availableLanguages = props.availableLanguages;

    _this.state = {
      title: selectedLanguage || availableLanguages && availableLanguages[0].text
    };
    return _this;
  }

  _createClass(LoginLanguagePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var selectedLanguage = nextProps.selectedLanguage,
          availableLanguages = nextProps.availableLanguages;

      var title = selectedLanguage || availableLanguages && availableLanguages[0].text;

      this.setState({ title: title });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          availableLanguages = _props.availableLanguages,
          className = _props.className,
          id = _props.id;
      var title = this.state.title;

      if (!availableLanguages) {
        return null;
      }
      var menuItems = availableLanguages.map(function (language, index) {
        return React.createElement(
          MenuItem,
          { key: index, value: language.value, active: title === language.text, onClick: _this2.handleClick },
          language.text
        );
      });

      return React.createElement(
        'div',
        { className: classNames('bootstrap-select btn-group', className) },
        React.createElement(
          DropdownButton,
          { title: title, id: id },
          menuItems
        )
      );
    }
  }]);

  return LoginLanguagePicker;
}(React.Component);

LoginLanguagePicker.propTypes = {
  /** Provided languages to pass into the dropdown menu */
  availableLanguages: PropTypes.arrayOf(PropTypes.shape({
    /** the language menu item's value */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** the language menu item's text */
    text: PropTypes.string
  })),
  /** The default selected language */
  selectedLanguage: PropTypes.string,
  /** Callback to trigger when selecting a language */
  onLanguageChange: PropTypes.func,
  /** Additional css classes */
  className: PropTypes.string,
  /** The dropdown's id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LoginLanguagePicker.defaultProps = {
  selectedLanguage: null,
  availableLanguages: null,
  onLanguageChange: noop,
  className: null,
  id: 'language-picker'
};

export default LoginLanguagePicker;