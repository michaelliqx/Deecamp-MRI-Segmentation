function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { OverlayTrigger } from '../OverlayTrigger';

/**
 * FieldLevelHelp Component for Patternfly React
 */
var FieldLevelHelp = function FieldLevelHelp(_ref) {
  var children = _ref.children,
      content = _ref.content,
      close = _ref.close,
      rootClose = _ref.rootClose,
      placement = _ref.placement,
      buttonClass = _ref.buttonClass,
      props = _objectWithoutProperties(_ref, ['children', 'content', 'close', 'rootClose', 'placement', 'buttonClass']);

  // backwards compatibility of the existing `close` prop - use that prop if it exists
  var closeProp = typeof close !== 'undefined' ? close : rootClose;
  var overlay = React.createElement(
    Popover,
    { id: 'popover' },
    content
  );
  var buttonClasses = classNames('popover-pf-info', buttonClass);

  return React.createElement(
    OverlayTrigger,
    { overlay: overlay, placement: placement, trigger: ['click'], rootClose: closeProp },
    React.createElement(
      Button,
      { bsStyle: 'link', className: buttonClasses },
      React.createElement(Icon, { type: 'pf', name: 'info' })
    )
  );
};

FieldLevelHelp.propTypes = {
  /** additional fieldlevelhelp classes */
  content: PropTypes.node,
  /** close prop */
  close: PropTypes.bool,
  /** leave popover/tooltip open  */
  rootClose: PropTypes.bool,
  /** overlay placement */
  placement: PropTypes.string,
  /** button class */
  buttonClass: PropTypes.string,
  /** children nodes  */
  children: PropTypes.node
};
FieldLevelHelp.defaultProps = {
  content: null,
  close: undefined,
  rootClose: true,
  placement: 'top',
  buttonClass: '',
  children: null
};

export default FieldLevelHelp;