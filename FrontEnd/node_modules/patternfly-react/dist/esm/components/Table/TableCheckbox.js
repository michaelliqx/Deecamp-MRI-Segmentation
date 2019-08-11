var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from '../Form';
import { noop } from '../../common/helpers';

/**
 * TableCheckbox component for Patternfly React
 */
var TableCheckbox = function TableCheckbox(_ref) {
  var id = _ref.id,
      label = _ref.label,
      checked = _ref.checked,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ['id', 'label', 'checked', 'onChange']);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      ControlLabel,
      { srOnly: true, htmlFor: id },
      label
    ),
    React.createElement('input', _extends({ type: 'checkbox', id: id, checked: checked, onChange: onChange }, props))
  );
};
TableCheckbox.propTypes = {
  /** checkbox id */
  id: PropTypes.string,
  /** checkbox label */
  label: PropTypes.string,
  /** checkbox is checked */
  checked: PropTypes.bool,
  /** onChange callback */
  onChange: PropTypes.func
};
TableCheckbox.defaultProps = {
  id: '',
  label: '',
  checked: false,
  onChange: noop
};
export default TableCheckbox;