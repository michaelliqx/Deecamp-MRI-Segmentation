var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import CustomMastheadDropdown from './InnerComponents/CustomMastheadDropdown';

/**
 * Masthead
 */
var MastheadDropdown = function MastheadDropdown(_ref) {
  var className = _ref.className,
      id = _ref.id,
      title = _ref.title,
      noCaret = _ref.noCaret,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'title', 'noCaret', 'children']);

  return React.createElement(
    Dropdown,
    _extends({ id: id, componentClass: CustomMastheadDropdown, className: className }, props),
    React.createElement(
      Dropdown.Toggle,
      { className: 'nav-item-iconic', bsStyle: 'link', noCaret: noCaret },
      title
    ),
    React.createElement(
      Dropdown.Menu,
      null,
      children
    )
  );
};

MastheadDropdown.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** ID of dropdown */
  id: PropTypes.string.isRequired,
  /** Title of dropdown */
  title: PropTypes.node,
  /** Children (likely MenuItem's) */
  children: PropTypes.node,
  /** Caret in Dropdown */
  noCaret: PropTypes.bool
};

MastheadDropdown.defaultProps = {
  className: '',
  title: null,
  children: null,
  noCaret: false
};

export default MastheadDropdown;