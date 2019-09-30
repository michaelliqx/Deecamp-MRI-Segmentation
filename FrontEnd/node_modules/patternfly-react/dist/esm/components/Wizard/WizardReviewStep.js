var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from '../ListGroup';
import { noop } from '../../common/helpers';

/**
 * WizardReviewStep component for Patternfly React
 */
var WizardReviewStep = function WizardReviewStep(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      title = _ref.title,
      collapsed = _ref.collapsed,
      props = _objectWithoutProperties(_ref, ['children', 'onClick', 'title', 'collapsed']);

  return React.createElement(
    ListGroupItem,
    _extends({ listItem: true }, props),
    React.createElement(
      'a',
      { href: '#', onClick: onClick, className: collapsed ? 'collapsed' : '' },
      title
    ),
    children
  );
};
WizardReviewStep.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Click handler */
  onClick: PropTypes.func,
  /** Step title */
  title: PropTypes.string,
  /** Step collapsed */
  collapsed: PropTypes.bool
};
WizardReviewStep.defaultProps = {
  children: null,
  onClick: noop,
  title: '',
  collapsed: false
};
export default WizardReviewStep;