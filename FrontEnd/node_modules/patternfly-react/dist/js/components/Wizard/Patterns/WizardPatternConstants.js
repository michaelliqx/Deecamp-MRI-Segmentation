'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wizardStepShape = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wizardStepShape = {
  title: _propTypes2.default.string,
  render: _propTypes2.default.func,
  onNext: _propTypes2.default.func,
  isInvalid: _propTypes2.default.bool,
  preventEnter: _propTypes2.default.bool,
  preventExit: _propTypes2.default.bool
};

exports.wizardStepShape = wizardStepShape;