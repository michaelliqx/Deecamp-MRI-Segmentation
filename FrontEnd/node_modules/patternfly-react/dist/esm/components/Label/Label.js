var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import BsLabel from 'react-bootstrap/es/Label';

import PropTypes from 'prop-types';
import RemoveButton from './RemoveButton';
import DisposableLabel from './DisposableLabel';
import CompoundLabel from './CompoundLabel';
import LabelWithTooltip from './LabelWithTooltip';

var Label = function Label(_ref) {
  var children = _ref.children,
      onRemoveClick = _ref.onRemoveClick,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['children', 'onRemoveClick', 'type']);

  return React.createElement(
    BsLabel,
    _extends({ bsStyle: type }, props),
    children,
    !!onRemoveClick && React.createElement(RemoveButton, { onRemoveClick: onRemoveClick, title: 'Remove' })
  );
};

// WARNING: If you change propTypes you MUST also change DisposableLabel.propTypes
Label.propTypes = _extends({}, BsLabel.propTypes, {
  /** Children nodes */
  children: PropTypes.node,
  /** Label type */
  type: PropTypes.string,
  /** callback when Label is removed  */
  onRemoveClick: PropTypes.func
});

// WARNING: If you change defaultProps you MUST also change DisposableLabel.defaultProps
Label.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: undefined
};

Label.RemoveButton = RemoveButton;
Label.DisposableLabel = DisposableLabel;
Label.CompoundLabel = CompoundLabel;
Label.WithTooltop = LabelWithTooltip;

export default Label;