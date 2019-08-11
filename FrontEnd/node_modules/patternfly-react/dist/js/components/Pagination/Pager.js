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

var _Icon = require('../Icon');

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pager component for Patternfly React
 */
var Pager = function Pager(_ref) {
  var baseClassName = _ref.baseClassName,
      className = _ref.className,
      messages = _ref.messages,
      disableNext = _ref.disableNext,
      onNextPage = _ref.onNextPage,
      disablePrevious = _ref.disablePrevious,
      onPreviousPage = _ref.onPreviousPage;

  var classes = (0, _classnames2.default)('pager', className);
  return _react2.default.createElement(
    'ul',
    { className: classes },
    _react2.default.createElement(
      'li',
      { className: (0, _classnames2.default)({ disabled: disablePrevious }, 'previous') },
      _react2.default.createElement(
        'a',
        {
          href: '#',
          className: (0, _classnames2.default)({ disabled: disablePrevious }),
          onClick: function onClick(e) {
            e.preventDefault();
            if (!disablePrevious) {
              onPreviousPage(e);
            }
          }
        },
        _react2.default.createElement(_Icon.Icon, { className: 'i', name: 'angle-left' }),
        messages.previousPage
      )
    ),
    _react2.default.createElement(
      'li',
      { className: (0, _classnames2.default)({ disabled: disableNext }, 'next') },
      _react2.default.createElement(
        'a',
        {
          href: '#',
          className: (0, _classnames2.default)({ disabled: disableNext }),
          onClick: function onClick(e) {
            e.preventDefault();
            if (!disableNext) {
              onNextPage(e);
            }
          }
        },
        messages.nextPage,
        _react2.default.createElement(_Icon.Icon, { className: 'i', name: 'angle-right' })
      )
    )
  );
};
Pager.propTypes = {
  /** Base css class */
  baseClassName: _propTypes2.default.string,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** message text inputs for i18n */
  messages: _propTypes2.default.shape({
    nextPage: _propTypes2.default.string,
    previousPage: _propTypes2.default.string
  }),
  /** next button disabled */
  disableNext: _propTypes2.default.bool,
  /** next page callback */
  onNextPage: _propTypes2.default.func,
  /** previous button disabled */
  disablePrevious: _propTypes2.default.bool,
  /** previous page callback */
  onPreviousPage: _propTypes2.default.func
};
Pager.defaultProps = {
  baseClassName: 'content-view-pf-pagination',
  className: '',
  messages: {
    nextPage: 'Next',
    previousPage: 'Previous'
  },
  disableNext: false,
  onNextPage: _helpers.noop,
  disablePrevious: false,
  onPreviousPage: _helpers.noop
};
exports.default = Pager;