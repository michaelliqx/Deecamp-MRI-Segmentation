import React from 'react';
import { InlineEdit } from '../../InlineEdit/';

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
    return React.createElement(InlineEdit, {
      value: value,
      additionalData: additionalData,
      isEditing: isEditing,
      renderValue: renderValue,
      renderEdit: renderEdit
    });
  };
};

export default inlineEditFormatterFactory;