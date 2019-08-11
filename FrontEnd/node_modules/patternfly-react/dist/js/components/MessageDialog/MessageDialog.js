'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../../common/helpers');

var _Modal = require('../Modal');

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  return _react2.default.createElement(
    _Modal.Modal,
    _extends({
      className: (0, _classnames2.default)('message-dialog-pf', className),
      show: show,
      onHide: onHide,
      enforceFocus: enforceFocus,
      'aria-modal': true,
      'aria-labelledby': accessibleName,
      'aria-describedby': accessibleDescription
    }, props),
    _react2.default.createElement(
      _Modal.Modal.Header,
      null,
      _react2.default.createElement(_Modal.Modal.CloseButton, { onClick: onHide }),
      _react2.default.createElement(
        _Modal.Modal.Title,
        { id: accessibleName },
        title
      )
    ),
    _react2.default.createElement(
      _Modal.Modal.Body,
      null,
      icon && icon,
      _react2.default.createElement(
        'div',
        { id: accessibleDescription },
        primaryContent && primaryContent,
        secondaryContent && secondaryContent
      )
    ),
    _react2.default.createElement(
      _Modal.Modal.Footer,
      null,
      !footer ? _react2.default.createElement(
        _react2.default.Fragment,
        null,
        secondaryActionButtonContent && _react2.default.createElement(
          _Button.Button,
          { bsStyle: secondaryActionButtonBsStyle, onClick: secondaryAction },
          secondaryActionButtonContent
        ),
        _react2.default.createElement(
          _Button.Button,
          { autoFocus: true, bsStyle: primaryActionButtonBsStyle, onClick: primaryAction },
          primaryActionButtonContent
        )
      ) : footer
    )
  );
};

MessageDialog.propTypes = {
  /** additional class(es) */
  className: _propTypes2.default.string,
  /** When true, the modal will show itself */
  show: _propTypes2.default.bool.isRequired,
  /** A callback fired when the header closeButton or backdrop is clicked */
  onHide: _propTypes2.default.func.isRequired,
  /** callback to trigger when clicking the default footer primary action button */
  primaryAction: function primaryAction(props, propName, componentName) {
    if (props.footer) {
      return null;
    }
    return _propTypes2.default.checkPropTypes({ primaryAction: _propTypes2.default.func.isRequired }, _defineProperty({}, propName, props[propName]), propName, componentName);
  },

  /** callback to trigger when clicking the default footer secondary action button */
  secondaryAction: _propTypes2.default.func,
  /** Bootstrap button style for primary action */
  primaryActionButtonBsStyle: _propTypes2.default.string,
  /** Bootstrap button style for secondary action */
  secondaryActionButtonBsStyle: _propTypes2.default.string,
  /** content for default footer primary action button */
  primaryActionButtonContent: function primaryActionButtonContent(props, propName, componentName) {
    if (props.footer) {
      return null;
    }
    return _propTypes2.default.checkPropTypes({ primaryActionButtonContent: _propTypes2.default.node.isRequired }, _defineProperty({}, propName, props[propName]), propName, componentName);
  },

  /** content for default footer secondary action button */
  secondaryActionButtonContent: _propTypes2.default.node,
  /** modal title */
  title: _propTypes2.default.string,
  /** modal body icon */
  icon: _propTypes2.default.node,
  /** modal body primary content */
  primaryContent: _propTypes2.default.node,
  /** modal body secondary content */
  secondaryContent: _propTypes2.default.node,
  /** custom footer */
  footer: _propTypes2.default.node,
  /** When true the modal will prevent focus from leaving the Modal while open */
  enforceFocus: _propTypes2.default.bool,
  /** Gives the modal an accessible name by referring to the element that provides the dialog title. Must be unique, as this sets an id */
  accessibleName: _propTypes2.default.string,
  /** Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. Must be unique, as this sets an id */
  accessibleDescription: _propTypes2.default.string
};

MessageDialog.defaultProps = {
  className: '',
  primaryAction: null,
  secondaryAction: _helpers.noop,
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

exports.default = MessageDialog;