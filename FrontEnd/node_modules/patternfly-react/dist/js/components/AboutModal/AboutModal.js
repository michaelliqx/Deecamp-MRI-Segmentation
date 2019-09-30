'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Modal = require('../Modal');

var _AboutModalVersions = require('./AboutModalVersions');

var _AboutModalVersions2 = _interopRequireDefault(_AboutModalVersions);

var _AboutModalVersionItem = require('./AboutModalVersionItem');

var _AboutModalVersionItem2 = _interopRequireDefault(_AboutModalVersionItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * AboutModal Component for PatternFly
 */
var AboutModal = function AboutModal(_ref) {
  var children = _ref.children,
      className = _ref.className,
      show = _ref.show,
      onHide = _ref.onHide,
      productTitle = _ref.productTitle,
      logo = _ref.logo,
      altLogo = _ref.altLogo,
      trademarkText = _ref.trademarkText,
      closeText = _ref.closeText,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'show', 'onHide', 'productTitle', 'logo', 'altLogo', 'trademarkText', 'closeText']);

  return _react2.default.createElement(
    _Modal.Modal,
    _extends({ className: className, contentClassName: 'about-modal-pf', show: show, onHide: onHide }, props),
    _react2.default.createElement(
      _Modal.Modal.Header,
      null,
      _react2.default.createElement(_Modal.Modal.CloseButton, { onClick: onHide, closeText: closeText })
    ),
    _react2.default.createElement(
      _Modal.Modal.Body,
      null,
      _react2.default.createElement(
        'h1',
        null,
        productTitle
      ),
      children,
      _react2.default.createElement(
        'div',
        { className: 'trademark-pf' },
        trademarkText
      )
    ),
    _react2.default.createElement(
      _Modal.Modal.Footer,
      null,
      _react2.default.createElement('img', { src: logo, alt: altLogo })
    )
  );
};

AboutModal.defaultProps = {
  closeText: 'Close'
};

AboutModal.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Flag to show the modal */
  show: _propTypes2.default.bool.isRequired,
  /** Function to call when modal is closed */
  onHide: _propTypes2.default.func.isRequired,
  /** Text or Element to show for the product title */
  productTitle: _propTypes2.default.node,
  /** Image Source for the Product logo */
  logo: _propTypes2.default.string,
  /** Alternate text if invalid logo */
  altLogo: _propTypes2.default.string,
  /** Trademark information text */
  trademarkText: _propTypes2.default.string,
  /** Alternate text for close button for screen readers (default 'Close') */
  closeText: _propTypes2.default.string
};
AboutModal.defaultProps = {
  children: null,
  className: '',
  productTitle: null,
  logo: '',
  altLogo: '',
  trademarkText: ''
};

AboutModal.Versions = _AboutModalVersions2.default;
AboutModal.VersionItem = _AboutModalVersionItem2.default;

exports.default = AboutModal;