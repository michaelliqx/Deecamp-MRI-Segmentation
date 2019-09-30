var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../../../../index';

var BasicLoginCardLayout = function BasicLoginCardLayout(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    Row,
    null,
    React.createElement(
      Col,
      _extends({ sm: 10, smOffset: 1, md: 8, mdOffset: 2, lg: 8, lgOffset: 2 }, props),
      children
    )
  );
};

BasicLoginCardLayout.propTypes = {
  /** Children nodes. */
  children: PropTypes.node
};

BasicLoginCardLayout.defaultProps = {
  children: null
};

export default BasicLoginCardLayout;