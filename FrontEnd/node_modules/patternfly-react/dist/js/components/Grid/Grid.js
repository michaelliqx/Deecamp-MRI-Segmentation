'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Grid = require('react-bootstrap/lib/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

var _Clearfix = require('./Clearfix');

var _Clearfix2 = _interopRequireDefault(_Clearfix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Grid2.default.Row = _Row2.default;
_Grid2.default.Col = _Col2.default;
_Grid2.default.Clearfix = _Clearfix2.default;

exports.default = _Grid2.default;