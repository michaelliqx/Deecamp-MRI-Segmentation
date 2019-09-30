'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Form = require('../Form');

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * TableCheckbox component for Patternfly React
 */
var TableCheckbox = function TableCheckbox(_ref) {
  var id = _ref.id,
      label = _ref.label,
      checked = _ref.checked,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ['id', 'label', 'checked', 'onChange']);

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _Form.ControlLabel,
      { srOnly: true, htmlFor: id },
      label
    ),
    _react2.default.createElement('input', _extends({ type: 'checkbox', id: id, checked: checked, onChange: onChange }, props))
  );
};
TableCheckbox.propTypes = {
  /** checkbox id */
  id: _propTypes2.default.string,
  /** checkbox label */
  label: _propTypes2.default.string,
  /** checkbox is checked */
  checked: _propTypes2.default.bool,
  /** onChange callback */
  onChange: _propTypes2.default.func
};
TableCheckbox.defaultProps = {
  id: '',
  label: '',
  checked: false,
  onChange: _helpers.noop
};
exports.default = TableCheckbox;