'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _DropdownButton = require('./DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

var _SplitButton = require('./SplitButton');

var _SplitButton2 = _interopRequireDefault(_SplitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Button2.default.Dropdown = _DropdownButton2.default;
_Button2.default.Group = _ButtonGroup2.default;
_Button2.default.Split = _SplitButton2.default;

exports.default = _Button2.default;