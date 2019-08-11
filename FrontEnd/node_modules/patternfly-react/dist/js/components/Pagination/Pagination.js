'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = undefined;

var _paginate = require('./paginate');

var _paginate2 = _interopRequireDefault(_paginate);

var _PaginationConstants = require('./PaginationConstants');

var _Pager = require('./Pager');

var _Pager2 = _interopRequireDefault(_Pager);

var _Paginator = require('./Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

var _PaginationRow = require('./PaginationRow');

var _PaginationRow2 = _interopRequireDefault(_PaginationRow);

var _PaginationRowAmountOfPages = require('./PaginationRowAmountOfPages');

var _PaginationRowAmountOfPages2 = _interopRequireDefault(_PaginationRowAmountOfPages);

var _PaginationRowArrowIcon = require('./PaginationRowArrowIcon');

var _PaginationRowArrowIcon2 = _interopRequireDefault(_PaginationRowArrowIcon);

var _PaginationRowBack = require('./PaginationRowBack');

var _PaginationRowBack2 = _interopRequireDefault(_PaginationRowBack);

var _PaginationRowButtonGroup = require('./PaginationRowButtonGroup');

var _PaginationRowButtonGroup2 = _interopRequireDefault(_PaginationRowButtonGroup);

var _PaginationRowForward = require('./PaginationRowForward');

var _PaginationRowForward2 = _interopRequireDefault(_PaginationRowForward);

var _PaginationRowItems = require('./PaginationRowItems');

var _PaginationRowItems2 = _interopRequireDefault(_PaginationRowItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = exports.Pagination = {
  paginate: _paginate2.default,
  Pager: _Pager2.default,
  Paginator: _Paginator2.default,
  PAGINATION_VIEW: _PaginationConstants.PAGINATION_VIEW,
  PAGINATION_VIEW_TYPES: _PaginationConstants.PAGINATION_VIEW_TYPES,
  Row: _PaginationRow2.default,
  RowAmountOfPages: _PaginationRowAmountOfPages2.default,
  RowArrowIcon: _PaginationRowArrowIcon2.default,
  RowBack: _PaginationRowBack2.default,
  RowButtonGroup: _PaginationRowButtonGroup2.default,
  RowForward: _PaginationRowForward2.default,
  RowItems: _PaginationRowItems2.default
};