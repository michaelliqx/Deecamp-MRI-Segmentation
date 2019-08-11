'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ConfirmButton = require('./ConfirmButton');

var _ConfirmButton2 = _interopRequireDefault(_ConfirmButton);

var _CancelButton = require('./CancelButton');

var _CancelButton2 = _interopRequireDefault(_CancelButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineEdit = function InlineEdit(_ref) {
  var value = _ref.value,
      isEditing = _ref.isEditing,
      additionalData = _ref.additionalData,
      renderValue = _ref.renderValue,
      renderEdit = _ref.renderEdit;

  if (isEditing(additionalData)) {
    return renderEdit(value, additionalData);
  }
  return renderValue(value, additionalData);
};
InlineEdit.propTypes = {
  /** Inline edit input value */
  value: _propTypes2.default.any,
  /** Function that determines whether value or edit component should be rendered */
  isEditing: _propTypes2.default.func,
  /** Additional data passed th the render functions */
  additionalData: _propTypes2.default.object,
  /** Returns value component */
  renderValue: _propTypes2.default.func,
  /** Returns edit component */
  renderEdit: _propTypes2.default.func
};

InlineEdit.ConfirmButton = _ConfirmButton2.default;
InlineEdit.CancelButton = _CancelButton2.default;

exports.default = InlineEdit;