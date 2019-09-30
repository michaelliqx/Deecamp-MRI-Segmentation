var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';

// Must be a class component react-bootstrap passes a ref to this.
// eslint-disable-next-line react/prefer-stateless-function

var InfoTipToggle = function (_React$Component) {
  _inherits(InfoTipToggle, _React$Component);

  function InfoTipToggle() {
    _classCallCheck(this, InfoTipToggle);

    return _possibleConstructorReturn(this, (InfoTipToggle.__proto__ || Object.getPrototypeOf(InfoTipToggle)).apply(this, arguments));
  }

  _createClass(InfoTipToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          bsClass = _props.bsClass,
          bsRole = _props.bsRole,
          children = _props.children,
          open = _props.open,
          props = _objectWithoutProperties(_props, ['bsClass', 'bsRole', 'children', 'open']);

      return React.createElement(
        'a',
        _extends({ href: '#', 'aria-expanded': open }, props),
        React.createElement(Icon, { type: 'pf', name: 'info' }),
        ' ',
        children
      );
    }
  }]);

  return InfoTipToggle;
}(React.Component);

InfoTipToggle.propTypes = _extends({}, Dropdown.propTypes, {
  children: PropTypes.node,
  open: PropTypes.bool,
  className: PropTypes.string
});
InfoTipToggle.defaultProps = {
  bsRole: 'toggle', // eslint-disable-line react/default-props-match-prop-types
  children: null,
  open: false,
  className: ''
};


export default InfoTipToggle;