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

var _Spinner = require('../Spinner');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingState = function (_Component) {
  _inherits(LoadingState, _Component);

  function LoadingState(props) {
    _classCallCheck(this, LoadingState);

    var _this = _possibleConstructorReturn(this, (LoadingState.__proto__ || Object.getPrototypeOf(LoadingState)).call(this, props));

    _this.state = {
      render: false
    };
    return _this;
  }

  _createClass(LoadingState, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.onTimeout = setTimeout(function () {
        _this2.setState({ render: true });
      }, this.props.timeout);
    }
  }, {
    key: 'componentWillUnmout',
    value: function componentWillUnmout() {
      clearTimeout(this.onTimeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          loadingText = _props.loadingText,
          children = _props.children,
          size = _props.size,
          additionalClasses = _props.additionalClasses;


      var spinner = _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('loading-state-pf', 'loading-state-pf-' + size, additionalClasses) },
        _react2.default.createElement(_Spinner.Spinner, { loading: loading, size: size }),
        loadingText
      );

      if (loading) {
        return this.state.render ? spinner : null;
      }
      return children;
    }
  }]);

  return LoadingState;
}(_react.Component);

LoadingState.propTypes = {
  /** determines whether to show spinner or children */
  loading: _propTypes2.default.bool,
  /** text to show with spinner */
  loadingText: _propTypes2.default.string,
  /** children nodes */
  children: _propTypes2.default.node,
  /** delay in showing the children */
  timeout: _propTypes2.default.number,
  /** size of the spinner */
  size: _propTypes2.default.oneOf(['lg', 'md', 'sm', 'xs']),
  /** additional css classes for LoadingState */
  additionalClasses: _propTypes2.default.string
};

LoadingState.defaultProps = {
  loading: false,
  loadingText: 'Loading',
  children: null,
  timeout: 300,
  size: 'lg',
  additionalClasses: ''
};

exports.default = LoadingState;