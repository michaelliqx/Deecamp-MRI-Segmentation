'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListMainCheckbox = function DualListMainCheckbox(_ref) {
  var isChecked = _ref.isChecked,
      side = _ref.side,
      onChange = _ref.onChange;
  return _react2.default.createElement('input', {
    className: 'dual-list-pf-main-checkbox',
    type: 'checkbox',
    'data-side': side,
    onChange: onChange,
    checked: isChecked
  });
};

DualListMainCheckbox.propTypes = {
  /** controlls the checkbox */
  isChecked: _propTypes2.default.bool,
  /** the side of the selectors, passed in the onChange function. */
  side: _propTypes2.default.string,
  /** The function which is being called on checked state toggled. */
  onChange: _propTypes2.default.func
};

DualListMainCheckbox.defaultProps = {
  isChecked: false,
  side: null,
  onChange: _helpers.noop
};

exports.default = DualListMainCheckbox;