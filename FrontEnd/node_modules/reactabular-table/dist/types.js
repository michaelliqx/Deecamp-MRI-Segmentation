'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableDefaults = exports.tableHeaderRowDefaults = exports.tableHeaderRowTypes = exports.tableHeaderContextTypes = exports.tableHeaderTypes = exports.tableBodyRowDefaults = exports.tableBodyRowTypes = exports.tableBodyContextTypes = exports.tableBodyDefaults = exports.tableBodyTypes = exports.tableContextTypes = exports.tableTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrayOfObjectColumns = _propTypes2.default.arrayOf(_propTypes2.default.shape({
  header: _propTypes2.default.shape({
    label: _propTypes2.default.string,
    transforms: _propTypes2.default.arrayOf(_propTypes2.default.func),
    formatters: _propTypes2.default.arrayOf(_propTypes2.default.func),
    props: _propTypes2.default.object
  }),
  cell: _propTypes2.default.shape({
    property: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    transforms: _propTypes2.default.arrayOf(_propTypes2.default.func),
    formatters: _propTypes2.default.arrayOf(_propTypes2.default.func),
    props: _propTypes2.default.object
  })
}));
var arrayOfArrayColumns = _propTypes2.default.arrayOf(_propTypes2.default.array);
var rowsType = _propTypes2.default.oneOfType([arrayOfObjectColumns, arrayOfArrayColumns]);
var rowKeyType = _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]);
var rowDataType = _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]);
var tableTypes = {
  columns: _propTypes2.default.array.isRequired,
  renderers: _propTypes2.default.object,
  components: _propTypes2.default.object // XXXXX: Deprecated in favor of renderers, remove in the next major!
};
var tableContextTypes = {
  columns: _propTypes2.default.array.isRequired,
  renderers: _propTypes2.default.object
};
var tableBodyDefaults = {
  onRow: function onRow() {}
};
var tableBodyTypes = {
  onRow: _propTypes2.default.func,
  rows: rowsType.isRequired,
  rowKey: rowKeyType
};
var tableBodyContextTypes = {
  columns: _propTypes2.default.array.isRequired,
  renderers: _propTypes2.default.object
};
var tableBodyRowDefaults = {
  onRow: function onRow() {
    return {};
  }
};
var tableBodyRowTypes = {
  columns: _propTypes2.default.array.isRequired,
  renderers: _propTypes2.default.object,
  onRow: _propTypes2.default.func,
  rowIndex: _propTypes2.default.number.isRequired,
  rowData: rowDataType.isRequired,
  rowKey: _propTypes2.default.string.isRequired
};
var tableHeaderTypes = {
  headerRows: _propTypes2.default.arrayOf(arrayOfObjectColumns),
  children: _propTypes2.default.any
};
var tableHeaderContextTypes = {
  columns: _propTypes2.default.array.isRequired,
  renderers: _propTypes2.default.object
};
var tableHeaderRowDefaults = {
  onRow: function onRow() {
    return {};
  }
};
var tableHeaderRowTypes = {
  renderers: _propTypes2.default.object,
  onRow: _propTypes2.default.func,
  rowIndex: _propTypes2.default.number.isRequired,
  rowData: rowDataType.isRequired
};
var tableDefaults = {
  renderers: {
    table: 'table',
    header: {
      wrapper: 'thead',
      row: 'tr',
      cell: 'th'
    },
    body: {
      wrapper: 'tbody',
      row: 'tr',
      cell: 'td'
    }
  }
};

exports.tableTypes = tableTypes;
exports.tableContextTypes = tableContextTypes;
exports.tableBodyTypes = tableBodyTypes;
exports.tableBodyDefaults = tableBodyDefaults;
exports.tableBodyContextTypes = tableBodyContextTypes;
exports.tableBodyRowTypes = tableBodyRowTypes;
exports.tableBodyRowDefaults = tableBodyRowDefaults;
exports.tableHeaderTypes = tableHeaderTypes;
exports.tableHeaderContextTypes = tableHeaderContextTypes;
exports.tableHeaderRowTypes = tableHeaderRowTypes;
exports.tableHeaderRowDefaults = tableHeaderRowDefaults;
exports.tableDefaults = tableDefaults;