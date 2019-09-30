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

var TableInlineEditHeaderRow = function TableInlineEditHeaderRow(props) {
  var buttonsPosition = function buttonsPosition(window, rowDimensions) {
    var position = {};

    position.bottom = window.height - rowDimensions.bottom - 3;
    position.right = window.width - rowDimensions.right + 10;
    return position;
  };

  var buttonsClassName = 'top bold';

  var rowProps = _extends({}, props, {
    buttonsPosition: buttonsPosition,
    buttonsClassName: buttonsClassName
  });

  return _react2.default.createElement(_TableConfirmButtonsRow2.default, rowProps);
};

TableInlineEditHeaderRow.shouldComponentUpdate = true;

TableInlineEditHeaderRow.defaultProps = _extends({}, _TableConfirmButtonsRow2.default.defaultProps);

TableInlineEditHeaderRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: _propTypes2.default.func,
  /** Confirm edit callback */
  onConfirm: _propTypes2.default.func,
  /** Cancel edit callback */
  onCancel: _propTypes2.default.func,
  /** Row cells */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /** Message text inputs for i18n */
  messages: _propTypes2.default.shape({
    confirmButtonLabel: _propTypes2.default.string,
    cancelButtonLabel: _propTypes2.default.string
  })
};

exports.default = TableInlineEditHeaderRow;