var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import { noop } from '../../common/helpers';

import ListViewExpand from './ListViewExpand';
import ListViewGroupItem from './ListViewGroupItem';
import ListViewGroupItemContainer from './ListViewGroupItemContainer';
import ListViewGroupItemHeader from './ListViewGroupItemHeader';
import ListViewRow from './ListViewRow';

/**
 * ListViewItem - main ListViewItem component which handles the expansion logic.
 * ListViewItem is considered expandable if it has child props. In that case it
 * renders ListViewGroupItemHeader and ListViewGroupItemContainer
 */

var ListViewItem = function (_React$Component) {
  _inherits(ListViewItem, _React$Component);

  function ListViewItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListViewItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListViewItem.__proto__ || Object.getPrototypeOf(ListViewItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: _this.props.initExpanded }, _this.toggleExpanded = function () {
      var _this$props = _this.props,
          onExpand = _this$props.onExpand,
          onExpandClose = _this$props.onExpandClose;

      if (_this.state.expanded) {
        onExpandClose();
      } else {
        onExpand();
      }
      _this.setState(function (prevState) {
        return { expanded: !prevState.expanded };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListViewItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          stacked = _props.stacked,
          onExpand = _props.onExpand,
          onExpandClose = _props.onExpandClose,
          actions = _props.actions,
          additionalInfo = _props.additionalInfo,
          description = _props.description,
          heading = _props.heading,
          leftContent = _props.leftContent,
          checkboxInput = _props.checkboxInput,
          hideCloseIcon = _props.hideCloseIcon,
          compoundExpand = _props.compoundExpand,
          compoundExpanded = _props.compoundExpanded,
          onCloseCompoundExpand = _props.onCloseCompoundExpand,
          initExpanded = _props.initExpanded,
          other = _objectWithoutProperties(_props, ['children', 'stacked', 'onExpand', 'onExpandClose', 'actions', 'additionalInfo', 'description', 'heading', 'leftContent', 'checkboxInput', 'hideCloseIcon', 'compoundExpand', 'compoundExpanded', 'onCloseCompoundExpand', 'initExpanded']);

      var expanded = this.state.expanded;


      if (children) {
        if (compoundExpand) {
          return React.createElement(
            ListViewGroupItem,
            _extends({ expanded: compoundExpanded, stacked: stacked }, other),
            React.createElement(ListViewRow, {
              checkboxInput: checkboxInput,
              leftContent: leftContent,
              heading: heading,
              description: description,
              additionalInfo: additionalInfo,
              actions: actions
            }),
            React.createElement(
              ListViewGroupItemContainer,
              {
                expanded: compoundExpanded,
                onClose: hideCloseIcon ? undefined : onCloseCompoundExpand
              },
              children
            )
          );
        }
        return React.createElement(
          ListViewGroupItem,
          _extends({ expanded: expanded, stacked: stacked }, other),
          React.createElement(
            ListViewGroupItemHeader,
            { toggleExpanded: this.toggleExpanded },
            React.createElement(ListViewExpand, { expanded: expanded, toggleExpanded: this.toggleExpanded }),
            React.createElement(ListViewRow, {
              checkboxInput: checkboxInput,
              leftContent: leftContent,
              heading: heading,
              description: description,
              additionalInfo: additionalInfo,
              actions: actions
            })
          ),
          React.createElement(
            ListViewGroupItemContainer,
            { expanded: expanded, onClose: hideCloseIcon ? undefined : this.toggleExpanded },
            children
          )
        );
      }
      return React.createElement(
        ListViewGroupItem,
        _extends({ stacked: stacked }, other),
        React.createElement(ListViewRow, {
          checkboxInput: checkboxInput,
          leftContent: leftContent,
          heading: heading,
          description: description,
          additionalInfo: additionalInfo,
          actions: actions
        })
      );
    }
  }]);

  return ListViewItem;
}(React.Component);

ListViewItem.propTypes = {
  /** Child node rendered as expanded content of the ListViewItem */
  children: PropTypes.node,
  /** Display the ListViewItem stacked or not */
  stacked: PropTypes.bool,
  /** Function triggered when expandable content is expanded */
  onExpand: PropTypes.func,
  /** Function triggered when expandable content is closed */
  onExpandClose: PropTypes.func,
  /** Node which renders right-positioned actions (e.g. Buttons, DropdownKebab...) */
  actions: PropTypes.node,
  /** An array of ListViewInfoItem instances to render additional info items */
  additionalInfo: PropTypes.arrayOf(PropTypes.node),
  /** Contents of ListViewItem description section */
  description: PropTypes.node,
  /** Contents of ListViewItem heading */
  heading: PropTypes.node,
  /** Contents for left section of ListViewItem (usually ListViewIcon) */
  leftContent: PropTypes.node,
  /** Checkbox form input component */
  checkboxInput: PropTypes.node,
  /** Optionally hide the close icon in expanded content */
  hideCloseIcon: PropTypes.bool,
  /** Flag to use compound expansion contents */
  compoundExpand: PropTypes.bool,
  /** Flag to show compound expansion contents */
  compoundExpanded: PropTypes.bool,
  /** Flag to initialize expanded state */
  initExpanded: PropTypes.bool,
  /** Function triggered when compound expandable content is closed */
  onCloseCompoundExpand: PropTypes.func
};
ListViewItem.defaultProps = {
  children: null,
  actions: null,
  additionalInfo: null,
  description: null,
  heading: null,
  leftContent: null,
  checkboxInput: null,
  compoundExpand: false,
  compoundExpanded: false,
  hideCloseIcon: false,
  onExpand: noop,
  onExpandClose: noop,
  initExpanded: false,
  onCloseCompoundExpand: noop,
  stacked: false
};
export default ListViewItem;