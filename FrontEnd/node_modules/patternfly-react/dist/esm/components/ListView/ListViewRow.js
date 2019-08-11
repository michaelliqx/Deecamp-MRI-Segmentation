import React from 'react';
import PropTypes from 'prop-types';

import ListViewActions from './ListViewActions';
import ListViewAdditionalInfo from './ListViewAdditionalInfo';
import ListViewCheckbox from './ListViewCheckbox';
import ListViewLeft from './ListViewLeft';
import ListViewBody from './ListViewBody';
import ListViewDescription from './ListViewDescription';
import ListViewDescriptionHeading from './ListViewDescriptionHeading';
import ListViewDescriptionText from './ListViewDescriptionText';
import ListViewMainInfo from './ListViewMainInfo';

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
    items.push(React.createElement(
      ListViewCheckbox,
      { key: 'checkbox' },
      checkboxInput
    ));
  }

  if (actions) {
    items.push(React.createElement(
      ListViewActions,
      { key: 'actions' },
      actions
    ));
  }

  items.push(React.createElement(
    ListViewMainInfo,
    { key: 'main_info' },
    leftContent && React.createElement(
      ListViewLeft,
      null,
      leftContent
    ),
    React.createElement(
      ListViewBody,
      null,
      (heading || description) && React.createElement(
        ListViewDescription,
        null,
        heading && React.createElement(
          ListViewDescriptionHeading,
          null,
          heading
        ),
        description && React.createElement(
          ListViewDescriptionText,
          null,
          description
        )
      ),
      additionalInfo && React.createElement(
        ListViewAdditionalInfo,
        null,
        additionalInfo
      )
    )
  ));

  return items;
};

ListViewRow.propTypes = {
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
  checkboxInput: PropTypes.node
};
export default ListViewRow;