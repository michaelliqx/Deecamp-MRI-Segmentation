'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Breadcrumb = require('react-bootstrap/lib/Breadcrumb');

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Breadcrumb = function Breadcrumb(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ['title']);

  var breadcrumbClass = (0, _classnames2.default)({
    'breadcrumbs-pf-title': title
  });
  return _react2.default.createElement(_Breadcrumb2.default, _extends({ className: breadcrumbClass }, props));
};

Breadcrumb.propTypes = _extends({}, _Breadcrumb2.default.propTypes, {
  title: _propTypes2.default.bool
});

Breadcrumb.defaultProps = {
  title: false
};

Breadcrumb.Item = _Breadcrumb2.default.Item;

exports.default = Breadcrumb;