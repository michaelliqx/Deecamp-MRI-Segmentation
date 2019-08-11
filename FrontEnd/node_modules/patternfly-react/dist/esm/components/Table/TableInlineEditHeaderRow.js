var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import TableConfirmButtonsRow from './TableConfirmButtonsRow';

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

  return React.createElement(TableConfirmButtonsRow, rowProps);
};

TableInlineEditHeaderRow.shouldComponentUpdate = true;

TableInlineEditHeaderRow.defaultProps = _extends({}, TableConfirmButtonsRow.defaultProps);

TableInlineEditHeaderRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: PropTypes.func,
  /** Confirm edit callback */
  onConfirm: PropTypes.func,
  /** Cancel edit callback */
  onCancel: PropTypes.func,
  /** Row cells */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /** Message text inputs for i18n */
  messages: PropTypes.shape({
    confirmButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string
  })
};

export default TableInlineEditHeaderRow;