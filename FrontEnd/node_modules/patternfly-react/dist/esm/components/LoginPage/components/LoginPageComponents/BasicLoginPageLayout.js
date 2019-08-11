var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from '../../../../index';

var BasicLoginPageLayout = function BasicLoginPageLayout(_ref) {
  var children = _ref.children,
      layout = _ref.layout,
      props = _objectWithoutProperties(_ref, ['children', 'layout']);

  return React.createElement(
    Grid,
    _extends({}, props, { fluid: true }),
    React.createElement(
      Row,
      null,
      React.createElement(
        Col,
        _extends({ sm: 8, smOffset: 2, md: 6, mdOffset: 3, lg: 6, lgOffset: 3 }, layout),
        children
      )
    )
  );
};

BasicLoginPageLayout.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.object
};

BasicLoginPageLayout.defaultProps = {
  children: null,
  layout: null
};

export default BasicLoginPageLayout;