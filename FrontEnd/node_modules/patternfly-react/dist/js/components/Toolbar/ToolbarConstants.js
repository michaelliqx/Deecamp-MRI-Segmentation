'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarContextProvider = exports.getToolbarContext = exports.toolbarContextTypes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toolbarContextTypes = { isDescendantOfToolbar: _propTypes2.default.bool };

var getToolbarContext = function getToolbarContext(props) {
  return {
    isDescendantOfToolbar: props.isDescendantOfToolbar
  };
};

var provideToolbarContext = (0, _recompose.withContext)(toolbarContextTypes, getToolbarContext);

var ToolbarContextProvider = provideToolbarContext(function (props) {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    props.children
  );
});

exports.toolbarContextTypes = toolbarContextTypes;
exports.getToolbarContext = getToolbarContext;
exports.ToolbarContextProvider = ToolbarContextProvider;