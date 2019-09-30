'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
 * PaginationRowForward component for Patternfly React
 */
var PaginationRowForward = function PaginationRowForward(_ref) {
  var className = _ref.className,
      page = _ref.page,
      amountOfPages = _ref.amountOfPages,
      messagesNextPage = _ref.messagesNextPage,
      messagesLastPage = _ref.messagesLastPage,
      onNextPage = _ref.onNextPage,
      onLastPage = _ref.onLastPage,
      props = _objectWithoutProperties(_ref, ['className', 'page', 'amountOfPages', 'messagesNextPage', 'messagesLastPage', 'onNextPage', 'onLastPage']);

  var classes = (0, _classnames2.default)('pagination', 'pagination-pf-forward', className);
  return _react2.default.createElement(
    'ul',
    { className: classes },
    _react2.default.createElement(
      'li',
      { className: page === amountOfPages ? 'disabled' : '' },
      _react2.default.createElement(
        'a',
        {
          href: '#',
          title: messagesNextPage,
          onClick: function onClick(e) {
            e.preventDefault();
            if (page !== amountOfPages) {
              onNextPage(e);
            }
          }
        },
        _react2.default.createElement(_PaginationRowArrowIcon2.default, { name: 'right' })
      )
    ),
    _react2.default.createElement(
      'li',
      { className: page === amountOfPages ? 'disabled' : '' },
      _react2.default.createElement(
        'a',
        {
          href: '#',
          title: messagesLastPage,
          onClick: function onClick(e) {
            e.preventDefault();
            if (page !== amountOfPages) {
              onLastPage(e);
            }
          }
        },
        _react2.default.createElement(_PaginationRowArrowIcon2.default, { name: 'double-right' })
      )
    )
  );
};
PaginationRowForward.propTypes = {
  /** additional class names */
  className: _propTypes2.default.string,
  /** pagination page */
  page: _propTypes2.default.number.isRequired,
  /** calculated amount of pages */
  amountOfPages: _propTypes2.default.number.isRequired,
  /** messages next page */
  messagesNextPage: _propTypes2.default.string.isRequired,
  /** messages last page */
  messagesLastPage: _propTypes2.default.string.isRequired,
  /** next page callback */
  onNextPage: _propTypes2.default.func,
  /** last page callback */
  onLastPage: _propTypes2.default.func
};
PaginationRowForward.defaultProps = {
  className: '',
  onNextPage: _helpers.noop,
  onLastPage: _helpers.noop
};
exports.default = PaginationRowForward;