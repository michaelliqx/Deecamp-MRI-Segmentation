'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Table = require('./Table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
    return _react2.default.createElement(
      'tr',
      rowProps,
      rowProps.children
    );
  };
  tableRow.shouldComponentUpdate = true;

  components.header = _extends({ cell: headerCell }, components.header || {});
  components.body = _extends({ cell: tableCell, row: tableRow }, components.body || {});

  var classes = (0, _classnames2.default)({
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

  return _react2.default.createElement(
    _Table.Table.Provider,
    _extends({ className: classes, renderers: components }, props, attributes),
    children
  );
};
TablePfProvider.propTypes = {
  /** Children nodes  */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** apply dataTable class */
  dataTable: _propTypes2.default.bool,
  /** apply Striped class */
  striped: _propTypes2.default.bool,
  /** apply Bordered class */
  bordered: _propTypes2.default.bool,
  /** apply Hover class */
  hover: _propTypes2.default.bool,
  /** apply Condensed class */
  condensed: _propTypes2.default.bool,
  /** apply pf-table-inline-edit class */
  inlineEdit: _propTypes2.default.bool,
  /** reactabular components override */
  components: _propTypes2.default.object
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
exports.default = TablePfProvider;