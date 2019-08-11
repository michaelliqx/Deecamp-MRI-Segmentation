'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListViewActions = require('./ListViewActions');

var _ListViewActions2 = _interopRequireDefault(_ListViewActions);

var _ListViewAdditionalInfo = require('./ListViewAdditionalInfo');

var _ListViewAdditionalInfo2 = _interopRequireDefault(_ListViewAdditionalInfo);

var _ListViewCheckbox = require('./ListViewCheckbox');

var _ListViewCheckbox2 = _interopRequireDefault(_ListViewCheckbox);

var _ListViewLeft = require('./ListViewLeft');

var _ListViewLeft2 = _interopRequireDefault(_ListViewLeft);

var _ListViewBody = require('./ListViewBody');

var _ListViewBody2 = _interopRequireDefault(_ListViewBody);

var _ListViewDescription = require('./ListViewDescription');

var _ListViewDescription2 = _interopRequireDefault(_ListViewDescription);

var _ListViewDescriptionHeading = require('./ListViewDescriptionHeading');

var _ListViewDescriptionHeading2 = _interopRequireDefault(_ListViewDescriptionHeading);

var _ListViewDescriptionText = require('./ListViewDescriptionText');

var _ListViewDescriptionText2 = _interopRequireDefault(_ListViewDescriptionText);

var _ListViewMainInfo = require('./ListViewMainInfo');

var _ListViewMainInfo2 = _interopRequireDefault(_ListViewMainInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ListViewRow wraps the ListViewItem row, conditionally renders sections
 * based on availability of individual props, maintains the ListItem row structure
 */
var ListViewRow = function ListViewRow(_ref) {
  var actions = _ref.actions,
      additionalInfo = _ref.additionalInfo,
      checkboxInput = _ref.checkboxInput,
      leftContent = _ref.leftContent,
      heading = _ref.heading,
      description = _ref.description;

  var items = [];

  if (checkboxInput) {
    items.push(_react2.default.createElement(
      _ListViewCheckbox2.default,
      { key: 'checkbox' },
      checkboxInput
    ));
  }

  if (actions) {
    items.push(_react2.default.createElement(
      _ListViewActions2.default,
      { key: 'actions' },
      actions
    ));
  }

  items.push(_react2.default.createElement(
    _ListViewMainInfo2.default,
    { key: 'main_info' },
    leftContent && _react2.default.createElement(
      _ListViewLeft2.default,
      null,
      leftContent
    ),
    _react2.default.createElement(
      _ListViewBody2.default,
      null,
      (heading || description) && _react2.default.createElement(
        _ListViewDescription2.default,
        null,
        heading && _react2.default.createElement(
          _ListViewDescriptionHeading2.default,
          null,
          heading
        ),
        description && _react2.default.createElement(
          _ListViewDescriptionText2.default,
          null,
          description
        )
      ),
      additionalInfo && _react2.default.createElement(
        _ListViewAdditionalInfo2.default,
        null,
        additionalInfo
      )
    )
  ));

  return items;
};

ListViewRow.propTypes = {
  /** Node which renders right-positioned actions (e.g. Buttons, DropdownKebab...) */
  actions: _propTypes2.default.node,
  /** An array of ListViewInfoItem instances to render additional info items */
  additionalInfo: _propTypes2.default.arrayOf(_propTypes2.default.node),
  /** Contents of ListViewItem description section */
  description: _propTypes2.default.node,
  /** Contents of ListViewItem heading */
  heading: _propTypes2.default.node,
  /** Contents for left section of ListViewItem (usually ListViewIcon) */
  leftContent: _propTypes2.default.node,
  /** Checkbox form input component */
  checkboxInput: _propTypes2.default.node
};
exports.default = ListViewRow;