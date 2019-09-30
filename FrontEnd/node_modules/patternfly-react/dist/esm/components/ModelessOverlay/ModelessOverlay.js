var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Timer from '../../common/Timer';
import { excludeKeys } from '../../common/helpers';

var ModelessOverlay = function (_React$Component) {
  _inherits(ModelessOverlay, _React$Component);

  function ModelessOverlay(props) {
    _classCallCheck(this, ModelessOverlay);

    var _this = _possibleConstructorReturn(this, (ModelessOverlay.__proto__ || Object.getPrototypeOf(ModelessOverlay)).call(this, props));

    _this.updateForTransitions = function () {
      _this.setState({ isIn: _this.props.show });
    };

    _this.state = { isIn: false };
    _this.inTimer = new Timer(_this.updateForTransitions, 150);
    return _this;
  }

  _createClass(ModelessOverlay, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.inTimer.clearTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          bsSize = _props.bsSize,
          show = _props.show,
          otherProps = _objectWithoutProperties(_props, ['children', 'className', 'bsSize', 'show']);

      var isIn = this.state.isIn;


      var classes = classNames('modal modeless-pf fade right-side-modal-pf', { shown: show || isIn, in: show && isIn }, className);

      if (isIn !== show) {
        this.inTimer.clearTimer();
        this.inTimer.startTimer();
      }

      var dialogClasses = classNames('modal-dialog', {
        'modal-sm': bsSize === 'sm' || bsSize === 'small',
        'modal-lg': bsSize === 'lg' || bsSize === 'large'
      });
      return React.createElement(
        'div',
        _extends({ role: 'dialog', tabIndex: -1, className: classes }, excludeKeys(otherProps, ['show'])),
        React.createElement(
          'div',
          { className: dialogClasses },
          React.createElement(
            'div',
            { className: 'modal-content' },
            children
          )
        )
      );
    }
  }]);

  return ModelessOverlay;
}(React.Component);

ModelessOverlay.propTypes = {
  /** Children */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** When true, the dialog is shown */
  show: PropTypes.bool,
  /** Component size variations (effects dialog width). */
  bsSize: PropTypes.oneOf(['lg', 'large', 'sm', 'small', 'default'])
};

ModelessOverlay.defaultProps = {
  children: null,
  className: '',
  show: false,
  bsSize: 'default'
};

export default ModelessOverlay;