'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DualListHeading = require('./DualListHeading');

var _DualListHeading2 = _interopRequireDefault(_DualListHeading);

var _DualListBody = require('./DualListBody');

var _DualListBody2 = _interopRequireDefault(_DualListBody);

var _DualListFooter = require('./DualListFooter');

var _DualListFooter2 = _interopRequireDefault(_DualListFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListSelector = function DualListSelector(props) {
  return _react2.default.createElement(
    'div',
    { className: 'dual-list-pf-selector' },
    _react2.default.createElement(_DualListHeading2.default, props),
    _react2.default.createElement(_DualListBody2.default, props),
    _react2.default.createElement(_DualListFooter2.default, props)
  );
};

exports.default = DualListSelector;