var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import TableConfirmButtonsRow from './TableConfirmButtonsRow';

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

  return React.createElement(TableConfirmButtonsRow, _extends({}, props, { buttonsPosition: buttonsPosition, buttonsClassName: buttonsClassName }));
};

TableInlineEditRow.shouldComponentUpdate = true;

TableInlineEditRow.defaultProps = _extends({}, TableConfirmButtonsRow.defaultProps, {
  last: false
});

TableInlineEditRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: PropTypes.func,
  /** Confirm edit callback */
  onConfirm: PropTypes.func,
  /** Cancel edit callback */
  onCancel: PropTypes.func,
  /** Flag to indicate last row */
  last: PropTypes.bool,
  /** Row cells */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /** Message text inputs for i18n */
  messages: PropTypes.shape({
    confirmButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string
  })
};

export default TableInlineEditRow;