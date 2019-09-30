var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import TableHeading from '../TableHeading';

var actionHeaderCellFormatter = function actionHeaderCellFormatter(value, _ref) {
  var column = _ref.column;
  return React.createElement(
    TableHeading,
    _extends({ 'aria-label': column.header.label }, column.header.props),
    column.header.label
  );
};
actionHeaderCellFormatter.propTypes = {
  /** cell value */
  value: PropTypes.node,
  /** column definition */
  column: PropTypes.object
};
actionHeaderCellFormatter.defaultProps = {
  value: null,
  column: {}
};
export default actionHeaderCellFormatter;