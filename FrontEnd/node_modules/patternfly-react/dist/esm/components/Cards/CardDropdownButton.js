var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { ButtonGroup } from '../Button';

var CardDropdownButton = function CardDropdownButton(_ref) {
  var id = _ref.id,
      children = _ref.children,
      title = _ref.title,
      className = _ref.className,
      pullRight = _ref.pullRight,
      props = _objectWithoutProperties(_ref, ['id', 'children', 'title', 'className', 'pullRight']);

  var classes = classNames('card-pf-time-frame-filter', className);
  var CustomButtonGroup = function CustomButtonGroup(customGroup) {
    return React.createElement(ButtonGroup, _extends({}, customGroup, { bsClass: ' ' }));
  };
  return React.createElement(
    Dropdown,
    _extends({ className: classes, id: id, pullRight: pullRight, componentClass: CustomButtonGroup }, props),
    React.createElement(
      Dropdown.Toggle,
      null,
      title
    ),
    React.createElement(
      Dropdown.Menu,
      null,
      children
    )
  );
};
CardDropdownButton.propTypes = {
  /** dropdown button id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Dropdown title */
  title: PropTypes.node,
  /** Additional element css classes */
  className: PropTypes.string,
  /** menu right aligned */
  pullRight: PropTypes.bool
};
CardDropdownButton.defaultProps = {
  pullRight: true,
  id: null,
  title: null,
  className: ''
};
export default CardDropdownButton;