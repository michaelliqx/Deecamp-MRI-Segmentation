var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Spinner } from '../Spinner';

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


      var spinner = React.createElement(
        'div',
        { className: classNames('loading-state-pf', 'loading-state-pf-' + size, additionalClasses) },
        React.createElement(Spinner, { loading: loading, size: size }),
        loadingText
      );

      if (loading) {
        return this.state.render ? spinner : null;
      }
      return children;
    }
  }]);

  return LoadingState;
}(Component);

LoadingState.propTypes = {
  /** determines whether to show spinner or children */
  loading: PropTypes.bool,
  /** text to show with spinner */
  loadingText: PropTypes.string,
  /** children nodes */
  children: PropTypes.node,
  /** delay in showing the children */
  timeout: PropTypes.number,
  /** size of the spinner */
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  /** additional css classes for LoadingState */
  additionalClasses: PropTypes.string
};

LoadingState.defaultProps = {
  loading: false,
  loadingText: 'Loading',
  children: null,
  timeout: 300,
  size: 'lg',
  additionalClasses: ''
};

export default LoadingState;