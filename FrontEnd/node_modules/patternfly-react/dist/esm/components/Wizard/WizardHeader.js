function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Modal } from '../Modal';

/**
 * WizardHeader component for Patternfly React
 */
var WizardHeader = function WizardHeader(_ref) {
  var onClose = _ref.onClose,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ['onClose', 'title']);

  return React.createElement(
    Modal.Header,
    props,
    React.createElement(
      'button',
      { className: 'close', onClick: onClose, 'aria-hidden': 'true', 'aria-label': 'Close' },
      React.createElement(Icon, { type: 'pf', name: 'close' })
    ),
    React.createElement(
      Modal.Title,
      null,
      title
    )
  );
};
WizardHeader.propTypes = {
  /** onClose callback */
  onClose: PropTypes.func.isRequired,
  /** The wizard title */
  title: PropTypes.node
};
WizardHeader.defaultProps = {
  title: null
};
export default WizardHeader;