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

var _PaginationRowArrowIcon = require('./PaginationRowArrowIcon');

var _PaginationRowArrowIcon2 = _interopRequireDefault(_PaginationRowArrowIcon);

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * PaginationRowBack component for Patternfly React
 */
var PaginationRowBack = function PaginationRowBack(_ref) {
  var className = _ref.className,
      page = _ref.page,
      messagesFirstPage = _ref.messagesFirstPage,
      messagesPreviousPage = _ref.messagesPreviousPage,
      onFirstPage = _ref.onFirstPage,
      onPreviousPage = _ref.onPreviousPage,
      props = _objectWithoutProperties(_ref, ['className', 'page', 'messagesFirstPage', 'messagesPreviousPage', 'onFirstPage', 'onPreviousPage']);

  var classes = (0, _classnames2.default)('pagination', 'pagination-pf-back', className);
  return _react2.default.createElement(
    'ul',
    _extends({ className: classes }, props),
    _react2.default.createElement(
      'li',
      { className: page === 1 ? 'disabled' : '' },
      _react2.default.createElement(
        'a',
        {
          href: '#',
          title: messagesFirstPage,
          onClick: function onClick(e) {
            e.preventDefault();
            if (page !== 1) {
              onFirstPage(e);
            }
          }
        },
        _react2.default.createElement(_PaginationRowArrowIcon2.default, { name: 'double-left' })
      )
    ),
    _react2.default.createElement(
      'li',
      { className: page === 1 ? 'disabled' : '' },
      _react2.default.createElement(
        'a',
        {
          href: '#',
          title: messagesPreviousPage,
          onClick: function onClick(e) {
            e.preventDefault();
            if (page !== 1) {
              onPreviousPage(e);
            }
          }
        },
        _react2.default.createElement(_PaginationRowArrowIcon2.default, { name: 'left' })
      )
    )
  );
};
PaginationRowBack.propTypes = {
  /** additional class names */
  className: _propTypes2.default.string,
  /** pagination page */
  page: _propTypes2.default.number.isRequired,
  /** messages firstPage */
  messagesFirstPage: _propTypes2.default.string.isRequired,
  /** messages previousPage */
  messagesPreviousPage: _propTypes2.default.string.isRequired,
  /** first page callback */
  onFirstPage: _propTypes2.default.func,
  /** previous page selection callback */
  onPreviousPage: _propTypes2.default.func
};
PaginationRowBack.defaultProps = {
  className: '',
  onFirstPage: _helpers.noop,
  onPreviousPage: _helpers.noop
};
exports.default = PaginationRowBack;