'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InlineEdit = require('../../InlineEdit/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Creates a reactabular formatter:

(<value>, {
  rowData: <object>,
  property: <string>,
  column: <column>,
  columnIndex: <number>,
  rowIndex: <number> }) => <string|React element>
*/
var inlineEditFormatterFactory = function inlineEditFormatterFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      isEditing = _ref.isEditing,
      renderValue = _ref.renderValue,
      renderEdit = _ref.renderEdit;

  return function (value, additionalData) {
    return _react2.default.createElement(_InlineEdit.InlineEdit, {
      value: value,
      additionalData: additionalData,
      isEditing: isEditing,
      renderValue: renderValue,
      renderEdit: renderEdit
    });
  };
};

exports.default = inlineEditFormatterFactory;