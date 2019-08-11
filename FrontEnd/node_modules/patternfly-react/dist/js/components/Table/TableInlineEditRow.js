'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableConfirmButtonsRow = require('./TableConfirmButtonsRow');

var _TableConfirmButtonsRow2 = _interopRequireDefault(_TableConfirmButtonsRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableInlineEditRow = function TableInlineEditRow(props) {
  var buttonsPosition = function buttonsPosition(window, rowDimensions) {
    var position = {};

    if (props.last) {
      position.bottom = window.height - rowDimensions.top - 1;
    } else {
      position.top = rowDimensions.bottom - 1;
    }
    position.right = window.width - rowDimensions.right + 10;
    return position;
  };

  var buttonsClassName = props.last ? 'top' : 'bottom';

  return _react2.default.createElement(_TableConfirmButtonsRow2.default, _extends({}, props, { buttonsPosition: buttonsPosition, buttonsClassName: buttonsClassName }));
};

TableInlineEditRow.shouldComponentUpdate = true;

TableInlineEditRow.defaultProps = _extends({}, _TableConfirmButtonsRow2.default.defaultProps, {
  last: false
});

TableInlineEditRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: _propTypes2.default.func,
  /** Confirm edit callback */
  onConfirm: _propTypes2.default.func,
  /** Cancel edit callback */
  onCancel: _propTypes2.default.func,
  /** Flag to indicate last row */
  last: _propTypes2.default.bool,
  /** Row cells */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /** Message text inputs for i18n */
  messages: _propTypes2.default.shape({
    confirmButtonLabel: _propTypes2.default.string,
    cancelButtonLabel: _propTypes2.default.string
  })
};

exports.default = TableInlineEditRow;