'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Button = require('../Button');

var _Popover = require('../Popover');

var _OverlayTrigger = require('../OverlayTrigger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
  var overlay = _react2.default.createElement(
    _Popover.Popover,
    { id: 'popover' },
    content
  );
  var buttonClasses = (0, _classnames2.default)('popover-pf-info', buttonClass);

  return _react2.default.createElement(
    _OverlayTrigger.OverlayTrigger,
    { overlay: overlay, placement: placement, trigger: ['click'], rootClose: closeProp },
    _react2.default.createElement(
      _Button.Button,
      { bsStyle: 'link', className: buttonClasses },
      _react2.default.createElement(_Icon.Icon, { type: 'pf', name: 'info' })
    )
  );
};

FieldLevelHelp.propTypes = {
  /** additional fieldlevelhelp classes */
  content: _propTypes2.default.node,
  /** close prop */
  close: _propTypes2.default.bool,
  /** leave popover/tooltip open  */
  rootClose: _propTypes2.default.bool,
  /** overlay placement */
  placement: _propTypes2.default.string,
  /** button class */
  buttonClass: _propTypes2.default.string,
  /** children nodes  */
  children: _propTypes2.default.node
};
FieldLevelHelp.defaultProps = {
  content: null,
  close: undefined,
  rootClose: true,
  placement: 'top',
  buttonClass: '',
  children: null
};

exports.default = FieldLevelHelp;