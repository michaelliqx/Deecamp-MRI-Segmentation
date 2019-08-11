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

var _index = require('../../../../index');

var _helpers = require('../../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return _react2.default.createElement(
          _index.MenuItem,
          { key: index, value: language.value, active: title === language.text, onClick: _this2.handleClick },
          language.text
        );
      });

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('bootstrap-select btn-group', className) },
        _react2.default.createElement(
          _index.DropdownButton,
          { title: title, id: id },
          menuItems
        )
      );
    }
  }]);

  return LoginLanguagePicker;
}(_react2.default.Component);

LoginLanguagePicker.propTypes = {
  /** Provided languages to pass into the dropdown menu */
  availableLanguages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    /** the language menu item's value */
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /** the language menu item's text */
    text: _propTypes2.default.string
  })),
  /** The default selected language */
  selectedLanguage: _propTypes2.default.string,
  /** Callback to trigger when selecting a language */
  onLanguageChange: _propTypes2.default.func,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** The dropdown's id */
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

LoginLanguagePicker.defaultProps = {
  selectedLanguage: null,
  availableLanguages: null,
  onLanguageChange: _helpers.noop,
  className: null,
  id: 'language-picker'
};

exports.default = LoginLanguagePicker;