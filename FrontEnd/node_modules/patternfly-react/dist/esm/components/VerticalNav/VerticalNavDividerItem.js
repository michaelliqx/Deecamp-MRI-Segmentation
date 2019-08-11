var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var VerticalNavDividerItem = function VerticalNavDividerItem(_ref) {
  var title = _ref.title,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['title', 'className']);

  var classes = classNames('vertical-sub-header-pf', className);

  return React.createElement(
    'span',
    _extends({ className: classes }, props),
    title
  );
};
VerticalNavDividerItem.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Title of divider */
  title: PropTypes.string
};
VerticalNavDividerItem.defaultProps = {
  className: '',
  title: ''
};
export default VerticalNavDividerItem;