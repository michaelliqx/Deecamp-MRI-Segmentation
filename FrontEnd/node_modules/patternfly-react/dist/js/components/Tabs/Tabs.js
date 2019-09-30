'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tabs = require('react-bootstrap/lib/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabContainer = require('./TabContainer');

var _TabContainer2 = _interopRequireDefault(_TabContainer);

var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Tabs2.default.Tab = _Tab2.default;
_Tabs2.default.TabContainer = _TabContainer2.default;
_Tabs2.default.TabContent = _TabContent2.default;
_Tabs2.default.TabPane = _TabPane2.default;

exports.default = _Tabs2.default;