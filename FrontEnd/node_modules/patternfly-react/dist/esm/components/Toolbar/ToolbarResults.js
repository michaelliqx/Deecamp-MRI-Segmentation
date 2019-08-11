var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../Grid';

var ToolbarResults = function ToolbarResults(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = classNames('toolbar-pf-results', className);
  if (!children) {
    return null;
  }
  return React.createElement(
    Row,
    _extends({ className: classes }, props),
    React.createElement(
      Col,
      { sm: 12 },
      children
    )
  );
};

ToolbarResults.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

ToolbarResults.defaultProps = {
  children: null,
  className: ''
};

ToolbarResults.displayName = 'ToolbarResults';

export default ToolbarResults;