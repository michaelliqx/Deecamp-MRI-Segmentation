'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../../index');

var _helpers = require('../../../common/helpers');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListFilter = function DualListFilter(_ref) {
  var onChange = _ref.onChange,
      side = _ref.side,
      placeHolder = _ref.placeHolder;
  return _react2.default.createElement(
    'span',
    { className: 'dual-list-pf-filter' },
    _react2.default.createElement('input', { onChange: onChange, type: 'text', placeholder: placeHolder, autoComplete: 'off', 'data-side': side }),
    _react2.default.createElement(_index.Icon, { size: 'lg', name: 'search', className: 'search-icon' })
  );
};

DualListFilter.propTypes = {
  /** The filter function that runs on the list items when the input changes. */
  onChange: _propTypes2.default.func,
  /** The side of the selector. */
  side: _propTypes2.default.string,
  /** Filter's placeholder. */
  placeHolder: _propTypes2.default.string
};

DualListFilter.defaultProps = {
  onChange: _helpers.noop,
  side: null,
  placeHolder: _constants.FILTER_LABEL
};

exports.default = DualListFilter;