'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../../../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BasicLoginPageLayout = function BasicLoginPageLayout(_ref) {
  var children = _ref.children,
      layout = _ref.layout,
      props = _objectWithoutProperties(_ref, ['children', 'layout']);

  return _react2.default.createElement(
    _index.Grid,
    _extends({}, props, { fluid: true }),
    _react2.default.createElement(
      _index.Row,
      null,
      _react2.default.createElement(
        _index.Col,
        _extends({ sm: 8, smOffset: 2, md: 6, mdOffset: 3, lg: 6, lgOffset: 3 }, layout),
        children
      )
    )
  );
};

BasicLoginPageLayout.propTypes = {
  children: _propTypes2.default.node,
  layout: _propTypes2.default.object
};

BasicLoginPageLayout.defaultProps = {
  children: null,
  layout: null
};

exports.default = BasicLoginPageLayout;