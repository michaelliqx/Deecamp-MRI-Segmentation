'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../../..');

var _helpers = require('../../../common/helpers');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListSort = function DualListSort(_ref) {
  var onClick = _ref.onClick,
      side = _ref.side,
      isSortAsc = _ref.isSortAsc,
      ariaLabel = _ref.ariaLabel;
  return _react2.default.createElement(_.Icon, {
    'aria-label': ariaLabel,
    className: 'dual-list-pf-sort-icon',
    type: 'pf',
    name: 'sort-common-' + (isSortAsc ? 'asc' : 'desc'),
    'data-side': side,
    tabIndex: '0',
    onClick: onClick,
    onKeyPress: onClick
  });
};

DualListSort.propTypes = {
  /** The function which is running when sort icon is clicked. */
  onClick: _propTypes2.default.func,
  /** Which side is the selector, passed by the onClick function. */
  side: _propTypes2.default.string,
  /** Which type of sort is it to determine the right icon. */
  isSortAsc: _propTypes2.default.bool,
  /** Sets the aria-label of the icon. */
  ariaLabel: _propTypes2.default.string
};

DualListSort.defaultProps = {
  onClick: _helpers.noop,
  side: null,
  isSortAsc: true,
  ariaLabel: _constants.SORT_ARIA_LABEL
};

exports.default = DualListSort;