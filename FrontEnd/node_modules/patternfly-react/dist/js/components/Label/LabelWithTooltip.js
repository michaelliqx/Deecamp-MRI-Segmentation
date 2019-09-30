'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = require('../Label');

var _OverlayTrigger = require('../OverlayTrigger');

var _Tooltip = require('../Tooltip');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tooltip = function tooltip(text) {
  return React.createElement(
    _Tooltip.Tooltip,
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
      _OverlayTrigger.OverlayTrigger,
      { placement: overlayPlacement, overlay: tooltip(value.label) },
      React.createElement(
        _Label.Label,
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
  onDeleteClick: _propTypes2.default.func.isRequired,
  /** Category in CATEGORY: value(s) pair */
  /**  Parent of label, it does not get displayed in this component */
  category: _propTypes2.default.shape({
    id: _propTypes2.default.any.isRequired,
    label: _propTypes2.default.string.isRequired
  }).isRequired,
  /** Individual Value in Category:VALUE(s) pair  */
  /** id uniquily identify value within its category, label is text which is displayed */
  value: _propTypes2.default.PropTypes.shape({
    id: _propTypes2.default.any.isRequired,
    label: _propTypes2.default.string.isRequired
  }).isRequired,
  /** Function used to truncate value label */
  truncate: _propTypes2.default.func.isRequired,
  /** Name of CSS class(es) which are set to label */
  className: _propTypes2.default.string,
  /** Bootstrap style which is set to label */
  bsStyle: _propTypes2.default.string,
  /** Placement of the overlay */
  overlayPlacement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left'])
};

LabelWithTooltip.defaultProps = {
  className: '',
  bsStyle: 'primary',
  overlayPlacement: 'bottom'
};
exports.default = LabelWithTooltip;