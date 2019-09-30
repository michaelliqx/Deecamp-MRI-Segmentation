var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table } from './Table';
/**
 * TablePfProvider component for Patternfly React
 */
var TablePfProvider = function TablePfProvider(_ref) {
  var children = _ref.children,
      className = _ref.className,
      dataTable = _ref.dataTable,
      striped = _ref.striped,
      bordered = _ref.bordered,
      inlineEdit = _ref.inlineEdit,
      hover = _ref.hover,
      condensed = _ref.condensed,
      components = _ref.components,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'dataTable', 'striped', 'bordered', 'inlineEdit', 'hover', 'condensed', 'components']);

  var headerCell = function headerCell(cellProps) {
    return cellProps.children;
  };
  var tableCell = function tableCell(cellProps) {
    return cellProps.children;
  };
  var tableRow = function tableRow(rowProps) {
    return React.createElement(
      'tr',
      rowProps,
      rowProps.children
    );
  };
  tableRow.shouldComponentUpdate = true;

  components.header = _extends({ cell: headerCell }, components.header || {});
  components.body = _extends({ cell: tableCell, row: tableRow }, components.body || {});

  var classes = classNames({
    table: true,
    dataTable: dataTable,
    'table-striped': striped,
    'table-bordered': bordered,
    'table-hover': hover,
    'table-condensed': condensed,
    'pf-table-inline-edit': inlineEdit
  }, className);
  var attributes = {};
  if (dataTable) {
    attributes.role = 'grid';
  }

  return React.createElement(
    Table.Provider,
    _extends({ className: classes, renderers: components }, props, attributes),
    children
  );
};
TablePfProvider.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** apply dataTable class */
  dataTable: PropTypes.bool,
  /** apply Striped class */
  striped: PropTypes.bool,
  /** apply Bordered class */
  bordered: PropTypes.bool,
  /** apply Hover class */
  hover: PropTypes.bool,
  /** apply Condensed class */
  condensed: PropTypes.bool,
  /** apply pf-table-inline-edit class */
  inlineEdit: PropTypes.bool,
  /** reactabular components override */
  components: PropTypes.object
};
TablePfProvider.defaultProps = {
  children: null,
  className: '',
  dataTable: false,
  striped: false,
  bordered: false,
  hover: false,
  condensed: false,
  inlineEdit: false,
  components: {}
};
export default TablePfProvider;