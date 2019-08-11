var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { NotificationDrawer } from '../NotificationDrawer/index';
import { NotificationDrawerPanelWrapper } from './index';
import { noop } from '../../../common/helpers';

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

  var translationsWrapper = _extends({}, NotificationDrawerPanelWrapper.defaultProps.translations, translations);

  var notificationPanels = panels.map(function (panel, i) {
    return React.createElement(NotificationDrawerPanelWrapper, {
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
  var noNotificationsMessage = React.createElement(NotificationDrawer.EmptyState, { title: translations.emptyState });

  return React.createElement(
    NotificationDrawer,
    { expanded: isExpanded },
    React.createElement(NotificationDrawer.Title, {
      title: translations.title,
      onCloseClick: function onCloseClick() {
        return toggleDrawerHide();
      },
      expandable: isExpandable,
      onExpandClick: toggleDrawerExpand
    }),
    React.createElement(
      NotificationDrawer.Accordion,
      null,
      notificationPanels.length === 0 ? noNotificationsMessage : notificationPanels
    )
  );
};

NotificationDrawerWrapper.propTypes = {
  /** toggleDrawer Hide/Expand func */
  toggleDrawerExpand: PropTypes.func,
  toggleDrawerHide: PropTypes.func,
  /** Notification Panels Array */
  panels: PropTypes.array,
  /** is Expanded Bool */
  isExpanded: PropTypes.bool,
  /** function(panelkey, notificationkey) on Notification Click */
  onNotificationClick: PropTypes.func,
  /** function(panelkey, notificationkey) on Notification Mark as Read Click */
  onNotificationAsRead: PropTypes.func,
  /** on function(panelkey) Panel Read All Click */
  onMarkPanelAsRead: PropTypes.func,
  /** function(url) on Dropdown Link Click */
  onClickedLink: PropTypes.func,
  /** function(panelkey, notificationkey) on Notification Hide Click */
  onNotificationHide: PropTypes.func,
  /** function(panelkey) Panel Clear All Click */
  onMarkPanelAsClear: PropTypes.func,
  /** function() togglePanel Click */
  togglePanel: PropTypes.func,
  /** show Loading notification Bool */
  isExpandable: PropTypes.bool,
  /** expanded Panel */
  expandedPanel: PropTypes.string,
  /** translations for Title, EmptyState, Read/Clear */
  translations: PropTypes.shape({
    title: PropTypes.string,
    unreadEvent: PropTypes.string,
    unreadEvents: PropTypes.string,
    emptyState: PropTypes.string,
    readAll: PropTypes.string,
    clearAll: PropTypes.string,
    deleteNotification: PropTypes.string
  })
};

NotificationDrawerWrapper.defaultProps = {
  panels: null,
  toggleDrawerHide: noop,
  toggleDrawerExpand: noop,
  togglePanel: null,
  isExpanded: false,
  onNotificationClick: noop,
  onNotificationAsRead: noop,
  onMarkPanelAsRead: noop,
  onClickedLink: noop,
  onNotificationHide: noop,
  onMarkPanelAsClear: noop,
  isExpandable: true,
  expandedPanel: null,
  translations: {}
};

export default NotificationDrawerWrapper;