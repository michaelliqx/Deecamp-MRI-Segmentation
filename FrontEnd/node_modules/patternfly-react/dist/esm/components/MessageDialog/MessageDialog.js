var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noop } from '../../common/helpers';
import { Modal } from '../Modal';
import { Button } from '../Button';

var MessageDialog = function MessageDialog(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      primaryAction = _ref.primaryAction,
      secondaryAction = _ref.secondaryAction,
      title = _ref.title,
      icon = _ref.icon,
      primaryContent = _ref.primaryContent,
      secondaryContent = _ref.secondaryContent,
      primaryActionButtonBsStyle = _ref.primaryActionButtonBsStyle,
      secondaryActionButtonBsStyle = _ref.secondaryActionButtonBsStyle,
      primaryActionButtonContent = _ref.primaryActionButtonContent,
      secondaryActionButtonContent = _ref.secondaryActionButtonContent,
      className = _ref.className,
      footer = _ref.footer,
      enforceFocus = _ref.enforceFocus,
      accessibleName = _ref.accessibleName,
      accessibleDescription = _ref.accessibleDescription,
      props = _objectWithoutProperties(_ref, ['show', 'onHide', 'primaryAction', 'secondaryAction', 'title', 'icon', 'primaryContent', 'secondaryContent', 'primaryActionButtonBsStyle', 'secondaryActionButtonBsStyle', 'primaryActionButtonContent', 'secondaryActionButtonContent', 'className', 'footer', 'enforceFocus', 'accessibleName', 'accessibleDescription']);

  return React.createElement(
    Modal,
    _extends({
      className: classNames('message-dialog-pf', className),
      show: show,
      onHide: onHide,
      enforceFocus: enforceFocus,
      'aria-modal': true,
      'aria-labelledby': accessibleName,
      'aria-describedby': accessibleDescription
    }, props),
    React.createElement(
      Modal.Header,
      null,
      React.createElement(Modal.CloseButton, { onClick: onHide }),
      React.createElement(
        Modal.Title,
        { id: accessibleName },
        title
      )
    ),
    React.createElement(
      Modal.Body,
      null,
      icon && icon,
      React.createElement(
        'div',
        { id: accessibleDescription },
        primaryContent && primaryContent,
        secondaryContent && secondaryContent
      )
    ),
    React.createElement(
      Modal.Footer,
      null,
      !footer ? React.createElement(
        React.Fragment,
        null,
        secondaryActionButtonContent && React.createElement(
          Button,
          { bsStyle: secondaryActionButtonBsStyle, onClick: secondaryAction },
          secondaryActionButtonContent
        ),
        React.createElement(
          Button,
          { autoFocus: true, bsStyle: primaryActionButtonBsStyle, onClick: primaryAction },
          primaryActionButtonContent
        )
      ) : footer
    )
  );
};

MessageDialog.propTypes = {
  /** additional class(es) */
  className: PropTypes.string,
  /** When true, the modal will show itself */
  show: PropTypes.bool.isRequired,
  /** A callback fired when the header closeButton or backdrop is clicked */
  onHide: PropTypes.func.isRequired,
  /** callback to trigger when clicking the default footer primary action button */
  primaryAction: function primaryAction(props, propName, componentName) {
    if (props.footer) {
      return null;
    }
    return PropTypes.checkPropTypes({ primaryAction: PropTypes.func.isRequired }, _defineProperty({}, propName, props[propName]), propName, componentName);
  },

  /** callback to trigger when clicking the default footer secondary action button */
  secondaryAction: PropTypes.func,
  /** Bootstrap button style for primary action */
  primaryActionButtonBsStyle: PropTypes.string,
  /** Bootstrap button style for secondary action */
  secondaryActionButtonBsStyle: PropTypes.string,
  /** content for default footer primary action button */
  primaryActionButtonContent: function primaryActionButtonContent(props, propName, componentName) {
    if (props.footer) {
      return null;
    }
    return PropTypes.checkPropTypes({ primaryActionButtonContent: PropTypes.node.isRequired }, _defineProperty({}, propName, props[propName]), propName, componentName);
  },

  /** content for default footer secondary action button */
  secondaryActionButtonContent: PropTypes.node,
  /** modal title */
  title: PropTypes.string,
  /** modal body icon */
  icon: PropTypes.node,
  /** modal body primary content */
  primaryContent: PropTypes.node,
  /** modal body secondary content */
  secondaryContent: PropTypes.node,
  /** custom footer */
  footer: PropTypes.node,
  /** When true the modal will prevent focus from leaving the Modal while open */
  enforceFocus: PropTypes.bool,
  /** Gives the modal an accessible name by referring to the element that provides the dialog title. Must be unique, as this sets an id */
  accessibleName: PropTypes.string,
  /** Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. Must be unique, as this sets an id */
  accessibleDescription: PropTypes.string
};

MessageDialog.defaultProps = {
  className: '',
  primaryAction: null,
  secondaryAction: noop,
  primaryActionButtonBsStyle: 'primary',
  secondaryActionButtonBsStyle: 'default',
  primaryActionButtonContent: null,
  secondaryActionButtonContent: null,
  title: '',
  icon: null,
  primaryContent: null,
  secondaryContent: null,
  footer: null,
  enforceFocus: true,
  accessibleName: '',
  accessibleDescription: ''
};

export default MessageDialog;