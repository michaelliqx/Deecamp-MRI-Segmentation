var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BsBreadcrumb from 'react-bootstrap/es/Breadcrumb';


var Breadcrumb = function Breadcrumb(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ['title']);

  var breadcrumbClass = classNames({
    'breadcrumbs-pf-title': title
  });
  return React.createElement(BsBreadcrumb, _extends({ className: breadcrumbClass }, props));
};

Breadcrumb.propTypes = _extends({}, BsBreadcrumb.propTypes, {
  title: PropTypes.bool
});

Breadcrumb.defaultProps = {
  title: false
};

Breadcrumb.Item = BsBreadcrumb.Item;

export default Breadcrumb;