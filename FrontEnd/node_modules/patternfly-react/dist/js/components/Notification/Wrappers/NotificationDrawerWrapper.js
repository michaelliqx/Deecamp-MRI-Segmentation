'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../NotificationDrawer/index');

var _index2 = require('./index');

var _helpers = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationDrawerWrapper = function NotificationDrawerWrapper(_ref) {
  var panels = _ref.panels,
      translations = _ref.translations,
      toggleDrawerHide = _ref.toggleDrawerHide,
      toggleDrawerExpand = _ref.toggleDrawerExpand,
      isExpandable = _ref.isExpandable,
      isExpanded = _ref.isExpanded,
      expandedPanel = _ref.expandedPanel,
      togglePanel = _ref.togglePanel,
      onNotificationClick = _ref.onNotificationClick,
      onNotificationAsRead = _ref.onNotificationAsRead,
      onNotificationHide = _ref.onNotificationHide,
      onMarkPanelAsRead = _ref.onMarkPanelAsRead,
      onMarkPanelAsClear = _ref.onMarkPanelAsClear,
      onClickedLink = _ref.onClickedLink;

  var translationsWrapper = _extends({}, _index2.NotificationDrawerPanelWrapper.defaultProps.translations, translations);

  var notificationPanels = panels.map(function (panel, i) {
    return _react2.default.createElement(_index2.NotificationDrawerPanelWrapper, {
      key: i,
      panelName: panel.panelName,
      panelkey: panel.panelkey,
      onClickedLink: onClickedLink,
      notifications: panel.notifications,
      togglePanel: togglePanel,
      isExpanded: expandedPanel === panel.panelkey,
      onNotificationClick: onNotificationClick,
      onNotificationAsRead: onNotificationAsRead,
      onNotificationHide: onNotificationHide,
      onMarkPanelAsRead: onMarkPanelAsRead,
      onMarkPanelAsClear: onMarkPanelAsClear,
      showLoading: panel.showLoading,
      translations: translationsWrapper
    });
  });
  var noNotificationsMessage = _react2.default.createElement(_index.NotificationDrawer.EmptyState, { title: translations.emptyState });

  return _react2.default.createElement(
    _index.NotificationDrawer,
    { expanded: isExpanded },
    _react2.default.createElement(_index.NotificationDrawer.Title, {
      title: translations.title,
      onCloseClick: function onCloseClick() {
        return toggleDrawerHide();
      },
      expandable: isExpandable,
      onExpandClick: toggleDrawerExpand
    }),
    _react2.default.createElement(
      _index.NotificationDrawer.Accordion,
      null,
      notificationPanels.length === 0 ? noNotificationsMessage : notificationPanels
    )
  );
};

NotificationDrawerWrapper.propTypes = {
  /** toggleDrawer Hide/Expand func */
  toggleDrawerExpand: _propTypes2.default.func,
  toggleDrawerHide: _propTypes2.default.func,
  /** Notification Panels Array */
  panels: _propTypes2.default.array,
  /** is Expanded Bool */
  isExpanded: _propTypes2.default.bool,
  /** function(panelkey, notificationkey) on Notification Click */
  onNotificationClick: _propTypes2.default.func,
  /** function(panelkey, notificationkey) on Notification Mark as Read Click */
  onNotificationAsRead: _propTypes2.default.func,
  /** on function(panelkey) Panel Read All Click */
  onMarkPanelAsRead: _propTypes2.default.func,
  /** function(url) on Dropdown Link Click */
  onClickedLink: _propTypes2.default.func,
  /** function(panelkey, notificationkey) on Notification Hide Click */
  onNotificationHide: _propTypes2.default.func,
  /** function(panelkey) Panel Clear All Click */
  onMarkPanelAsClear: _propTypes2.default.func,
  /** function() togglePanel Click */
  togglePanel: _propTypes2.default.func,
  /** show Loading notification Bool */
  isExpandable: _propTypes2.default.bool,
  /** expanded Panel */
  expandedPanel: _propTypes2.default.string,
  /** translations for Title, EmptyState, Read/Clear */
  translations: _propTypes2.default.shape({
    title: _propTypes2.default.string,
    unreadEvent: _propTypes2.default.string,
    unreadEvents: _propTypes2.default.string,
    emptyState: _propTypes2.default.string,
    readAll: _propTypes2.default.string,
    clearAll: _propTypes2.default.string,
    deleteNotification: _propTypes2.default.string
  })
};

NotificationDrawerWrapper.defaultProps = {
  panels: null,
  toggleDrawerHide: _helpers.noop,
  toggleDrawerExpand: _helpers.noop,
  togglePanel: null,
  isExpanded: false,
  onNotificationClick: _helpers.noop,
  onNotificationAsRead: _helpers.noop,
  onMarkPanelAsRead: _helpers.noop,
  onClickedLink: _helpers.noop,
  onNotificationHide: _helpers.noop,
  onMarkPanelAsClear: _helpers.noop,
  isExpandable: true,
  expandedPanel: null,
  translations: {}
};

exports.default = NotificationDrawerWrapper;