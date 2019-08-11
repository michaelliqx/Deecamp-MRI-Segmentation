var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Spinner = function Spinner(_ref) {
  var loading = _ref.loading,
      size = _ref.size,
      inline = _ref.inline,
      children = _ref.children,
      inverse = _ref.inverse,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['loading', 'size', 'inline', 'children', 'inverse', 'className']);

  if (loading) {
    var classes = classNames(className, 'spinner', 'spinner-' + size, {
      'spinner-inline': inline,
      'spinner-inverse': inverse
    });

    return React.createElement('div', _extends({ className: classes }, props));
  }

  return children || null;
};

Spinner.propTypes = {
  loading: PropTypes.bool,
  inline: PropTypes.bool,
  inverse: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  children: PropTypes.node,
  className: PropTypes.string
};

Spinner.defaultProps = {
  loading: false,
  size: 'md',
  inline: false,
  inverse: false,
  children: null,
  className: ''
};

export default Spinner;