var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../Modal';

import AboutModalVersions from './AboutModalVersions';
import AboutModalVersionItem from './AboutModalVersionItem';

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

  return React.createElement(
    Modal,
    _extends({ className: className, contentClassName: 'about-modal-pf', show: show, onHide: onHide }, props),
    React.createElement(
      Modal.Header,
      null,
      React.createElement(Modal.CloseButton, { onClick: onHide, closeText: closeText })
    ),
    React.createElement(
      Modal.Body,
      null,
      React.createElement(
        'h1',
        null,
        productTitle
      ),
      children,
      React.createElement(
        'div',
        { className: 'trademark-pf' },
        trademarkText
      )
    ),
    React.createElement(
      Modal.Footer,
      null,
      React.createElement('img', { src: logo, alt: altLogo })
    )
  );
};

AboutModal.defaultProps = {
  closeText: 'Close'
};

AboutModal.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to show the modal */
  show: PropTypes.bool.isRequired,
  /** Function to call when modal is closed */
  onHide: PropTypes.func.isRequired,
  /** Text or Element to show for the product title */
  productTitle: PropTypes.node,
  /** Image Source for the Product logo */
  logo: PropTypes.string,
  /** Alternate text if invalid logo */
  altLogo: PropTypes.string,
  /** Trademark information text */
  trademarkText: PropTypes.string,
  /** Alternate text for close button for screen readers (default 'Close') */
  closeText: PropTypes.string
};
AboutModal.defaultProps = {
  children: null,
  className: '',
  productTitle: null,
  logo: '',
  altLogo: '',
  trademarkText: ''
};

AboutModal.Versions = AboutModalVersions;
AboutModal.VersionItem = AboutModalVersionItem;

export default AboutModal;