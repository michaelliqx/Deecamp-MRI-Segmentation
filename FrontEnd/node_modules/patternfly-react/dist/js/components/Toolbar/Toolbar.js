'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _helpers = require('../../common/helpers');

var _Grid = require('../Grid');

var _ToolbarResults = require('./ToolbarResults');

var _ToolbarResults2 = _interopRequireDefault(_ToolbarResults);

var _ToolbarRightContent = require('./ToolbarRightContent');

var _ToolbarRightContent2 = _interopRequireDefault(_ToolbarRightContent);

var _ToolbarFind = require('./ToolbarFind');

var _ToolbarFind2 = _interopRequireDefault(_ToolbarFind);

var _ToolbarViewSelector = require('./ToolbarViewSelector');

var _ToolbarViewSelector2 = _interopRequireDefault(_ToolbarViewSelector);

var _ToolbarConstants = require('./ToolbarConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ContextualToolbar = function ContextualToolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      preventSubmit = _ref.preventSubmit,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'preventSubmit']);

  var toolbarChildren = (0, _helpers.filterChildren)(children, function (child) {
    return !(0, _helpers.hasDisplayName)(child, _ToolbarResults2.default.displayName);
  });
  var resultsChildren = (0, _helpers.filterChildren)(children, function (child) {
    return (0, _helpers.hasDisplayName)(child, _ToolbarResults2.default.displayName);
  });

  return _react2.default.createElement(
    _ToolbarConstants.ToolbarContextProvider,
    { isDescendantOfToolbar: true },
    _react2.default.createElement(
      _Grid.Grid,
      { fluid: true, className: className },
      _react2.default.createElement(
        _Grid.Grid.Row,
        { className: 'toolbar-pf' },
        _react2.default.createElement(
          _Grid.Grid.Col,
          { sm: 12 },
          _react2.default.createElement(
            'form',
            {
              className: 'toolbar-pf-actions',
              onSubmit: function onSubmit(e) {
                if (preventSubmit) {
                  e.preventDefault();
                }
              }
            },
            toolbarChildren
          ),
          resultsChildren
        )
      )
    )
  );
};

ContextualToolbar.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Prevent submission of toolbar children internal form */
  preventSubmit: _propTypes2.default.bool
};

ContextualToolbar.defaultProps = {
  children: null,
  className: '',
  preventSubmit: false
};

var Toolbar = (0, _recompose.withContext)(_ToolbarConstants.toolbarContextTypes, _ToolbarConstants.getToolbarContext)(ContextualToolbar);

Toolbar.Results = _ToolbarResults2.default;
Toolbar.RightContent = _ToolbarRightContent2.default;
Toolbar.Find = _ToolbarFind2.default;
Toolbar.ViewSelector = _ToolbarViewSelector2.default;

exports.default = Toolbar;