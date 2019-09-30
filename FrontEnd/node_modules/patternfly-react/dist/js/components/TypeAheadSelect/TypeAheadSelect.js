'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactBootstrapTypeahead = require('react-bootstrap-typeahead');

var _AsyncTypeAheadSelect = require('./AsyncTypeAheadSelect');

var _AsyncTypeAheadSelect2 = _interopRequireDefault(_AsyncTypeAheadSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactBootstrapTypeahead.Typeahead.Highlighter = _reactBootstrapTypeahead.Highlighter;
_reactBootstrapTypeahead.Typeahead.Menu = _reactBootstrapTypeahead.Menu;
_reactBootstrapTypeahead.Typeahead.MenuItem = _reactBootstrapTypeahead.MenuItem;
_reactBootstrapTypeahead.Typeahead.Token = _reactBootstrapTypeahead.Token;
_reactBootstrapTypeahead.Typeahead.TypeaheadMenu = _reactBootstrapTypeahead.TypeaheadMenu;
_reactBootstrapTypeahead.Typeahead.asyncContainer = _reactBootstrapTypeahead.asyncContainer;
_reactBootstrapTypeahead.Typeahead.menuItemContainer = _reactBootstrapTypeahead.menuItemContainer;
_reactBootstrapTypeahead.Typeahead.tokenContainer = _reactBootstrapTypeahead.tokenContainer;

_reactBootstrapTypeahead.Typeahead.Async = _AsyncTypeAheadSelect2.default;

exports.default = _reactBootstrapTypeahead.Typeahead;