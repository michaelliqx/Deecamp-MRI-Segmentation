import * as React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { OverlayTrigger } from '../OverlayTrigger';
import { Tooltip } from '../Tooltip';

var tooltip = function tooltip(text) {
  return React.createElement(
    Tooltip,
    { id: 'tooltip' },
    text
  );
};

var LabelWithTooltip = function LabelWithTooltip(_ref) {
  var onDeleteClick = _ref.onDeleteClick,
      category = _ref.category,
      value = _ref.value,
      truncate = _ref.truncate,
      bsStyle = _ref.bsStyle,
      className = _ref.className,
      overlayPlacement = _ref.overlayPlacement;
  return React.createElement(
    'li',
    { key: value.id },
    React.createElement(
      OverlayTrigger,
      { placement: overlayPlacement, overlay: tooltip(value.label) },
      React.createElement(
        Label,
        {
          key: value.id,
          onRemoveClick: function onRemoveClick() {
            return onDeleteClick(category, value);
          },
          bsStyle: bsStyle,
          className: 'compound-label-inner-color-pf ' + className
        },
        truncate(value.label)
      )
    )
  );
};

LabelWithTooltip.propTypes = {
  /** Fuction callback called when X button is clicked */
  onDeleteClick: PropTypes.func.isRequired,
  /** Category in CATEGORY: value(s) pair */
  /**  Parent of label, it does not get displayed in this component */
  category: PropTypes.shape({
    id: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  /** Individual Value in Category:VALUE(s) pair  */
  /** id uniquily identify value within its category, label is text which is displayed */
  value: PropTypes.PropTypes.shape({
    id: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  /** Function used to truncate value label */
  truncate: PropTypes.func.isRequired,
  /** Name of CSS class(es) which are set to label */
  className: PropTypes.string,
  /** Bootstrap style which is set to label */
  bsStyle: PropTypes.string,
  /** Placement of the overlay */
  overlayPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

LabelWithTooltip.defaultProps = {
  className: '',
  bsStyle: 'primary',
  overlayPlacement: 'bottom'
};
export default LabelWithTooltip;