import PropTypes from 'prop-types';
import { default as ConfirmButton } from './ConfirmButton';
import { default as CancelButton } from './CancelButton';

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
  value: PropTypes.any,
  /** Function that determines whether value or edit component should be rendered */
  isEditing: PropTypes.func,
  /** Additional data passed th the render functions */
  additionalData: PropTypes.object,
  /** Returns value component */
  renderValue: PropTypes.func,
  /** Returns edit component */
  renderEdit: PropTypes.func
};

InlineEdit.ConfirmButton = ConfirmButton;
InlineEdit.CancelButton = CancelButton;

export default InlineEdit;