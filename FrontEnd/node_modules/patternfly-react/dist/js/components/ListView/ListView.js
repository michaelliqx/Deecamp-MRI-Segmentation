'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListViewActions = require('./ListViewActions');

var _ListViewActions2 = _interopRequireDefault(_ListViewActions);

var _ListViewAdditionalInfo = require('./ListViewAdditionalInfo');

var _ListViewAdditionalInfo2 = _interopRequireDefault(_ListViewAdditionalInfo);

var _ListViewBody = require('./ListViewBody');

var _ListViewBody2 = _interopRequireDefault(_ListViewBody);

var _ListViewCheckbox = require('./ListViewCheckbox');

var _ListViewCheckbox2 = _interopRequireDefault(_ListViewCheckbox);

var _ListViewDescription = require('./ListViewDescription');

var _ListViewDescription2 = _interopRequireDefault(_ListViewDescription);

var _ListViewDescriptionHeading = require('./ListViewDescriptionHeading');

var _ListViewDescriptionHeading2 = _interopRequireDefault(_ListViewDescriptionHeading);

var _ListViewDescriptionText = require('./ListViewDescriptionText');

var _ListViewDescriptionText2 = _interopRequireDefault(_ListViewDescriptionText);

var _ListViewExpand = require('./ListViewExpand');

var _ListViewExpand2 = _interopRequireDefault(_ListViewExpand);

var _ListViewGroupItem = require('./ListViewGroupItem');

var _ListViewGroupItem2 = _interopRequireDefault(_ListViewGroupItem);

var _ListViewGroupItemContainer = require('./ListViewGroupItemContainer');

var _ListViewGroupItemContainer2 = _interopRequireDefault(_ListViewGroupItemContainer);

var _ListViewGroupItemHeader = require('./ListViewGroupItemHeader');

var _ListViewGroupItemHeader2 = _interopRequireDefault(_ListViewGroupItemHeader);

var _ListViewIcon = require('./ListViewIcon');

var _ListViewIcon2 = _interopRequireDefault(_ListViewIcon);

var _ListViewInfoItem = require('./ListViewInfoItem');

var _ListViewInfoItem2 = _interopRequireDefault(_ListViewInfoItem);

var _ListViewItem = require('./ListViewItem');

var _ListViewItem2 = _interopRequireDefault(_ListViewItem);

var _ListViewLeft = require('./ListViewLeft');

var _ListViewLeft2 = _interopRequireDefault(_ListViewLeft);

var _ListViewMainInfo = require('./ListViewMainInfo');

var _ListViewMainInfo2 = _interopRequireDefault(_ListViewMainInfo);

var _ListViewRow = require('./ListViewRow');

var _ListViewRow2 = _interopRequireDefault(_ListViewRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Components in this module are used as building blocks for ListViewItem and
 * ListViewRow. If needed, components can be used to create custom ListViewItem
 *
 * Custom ListView example:
 *
 * <ListView>
 *   <ListViewGroupItem stacked expanded>
 *     <ListViewGroupItemHeader toggleExpanded={functionToToggle}> // required only if the ListViewGroupItem is supposed to be expandable
 *       <ListViewExpand expanded />
 *       <ListViewCheckbox />
 *       <ListViewActions>
 *         // buttons, dropdowns...
 *       </ListViewActions>
 *       <ListViewMainInfo>
 *         <ListViewLeft>
 *           <ListViewIcon size="sm" name={iconName} />
 *         </ListViewLeft>
 *         <ListViewBody>
 *           <ListViewDescription>
 *             <ListViewDescriptionHeading>
 *               {name}
 *             </ListViewDescriptionHeading>
 *             <ListViewDescriptionText>
 *               {description}
 *             </ListViewDescriptionText>
 *           </ListViewDescription>
 *           <ListViewAdditionalInfo>
 *             <ListViewInfoItem>
 *               <ListViewIcon type="pf" name="flavor" />
 *               {Item1}
 *             </ListViewInfoItem>
 *             <ListViewInfoItem>
 *               <ListViewIcon type="pf" name="cpu" />
 *               {Item2}
 *             </ListViewInfoItem>
 *           </ListViewAdditionalInfo>
 *         </ListViewBody>
 *       </ListViewMainInfo>
 *     </ListViewGroupItemHeader>
 *
 *     <ListViewGroupItemContainer onClose={functionWhichClosesMe} expanded>
 *       <Row>Some content goes here</Row>
 *     </ListViewGroupItemContainer>
 *
 *   </ListViewGroupItem>
 *   ...
 * </ListView>
 */

/**
 * ListView component wraps ListViewItems
 */
var ListView = function ListView(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = (0, _classnames2.default)('list-group list-view-pf list-view-pf-view', className);
  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};
ListView.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Children nodes - ListViewGroupItem or ListViewItem instances */
  children: _propTypes2.default.node
};
ListView.defaultProps = {
  className: '',
  children: null
};

ListView.Actions = _ListViewActions2.default;
ListView.AdditionalInfo = _ListViewAdditionalInfo2.default;
ListView.Body = _ListViewBody2.default;
ListView.Checkbox = _ListViewCheckbox2.default;
ListView.Description = _ListViewDescription2.default;
ListView.DescriptionHeading = _ListViewDescriptionHeading2.default;
ListView.DescriptionText = _ListViewDescriptionText2.default;
ListView.Expand = _ListViewExpand2.default;
ListView.GroupItem = _ListViewGroupItem2.default;
ListView.GroupItemContainer = _ListViewGroupItemContainer2.default;
ListView.GroupItemHeader = _ListViewGroupItemHeader2.default;
ListView.Icon = _ListViewIcon2.default;
ListView.InfoItem = _ListViewInfoItem2.default;
ListView.Item = _ListViewItem2.default;
ListView.Left = _ListViewLeft2.default;
ListView.MainInfo = _ListViewMainInfo2.default;
ListView.Row = _ListViewRow2.default;

exports.default = ListView;