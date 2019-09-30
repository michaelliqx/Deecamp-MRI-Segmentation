'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeViewIndents = function TreeViewIndents(_ref) {
  var level = _ref.level;

  var indents = [];

  if (level === 1) {
    return null;
  }
  for (var i = 1; i <= (level - 1) * 4; i++) {
    indents.push(_react2.default.createElement('span', { className: 'indent', key: i }));
  }

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    indents
  );
};

TreeViewIndents.propTypes = {
  level: _propTypes2.default.number.isRequired
};

exports.default = TreeViewIndents;