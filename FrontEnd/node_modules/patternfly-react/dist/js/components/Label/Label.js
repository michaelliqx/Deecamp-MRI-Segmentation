'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Label = require('react-bootstrap/lib/Label');

var _Label2 = _interopRequireDefault(_Label);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RemoveButton = require('./RemoveButton');

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

var _DisposableLabel = require('./DisposableLabel');

var _DisposableLabel2 = _interopRequireDefault(_DisposableLabel);

var _CompoundLabel = require('./CompoundLabel');

var _CompoundLabel2 = _interopRequireDefault(_CompoundLabel);

var _LabelWithTooltip = require('./LabelWithTooltip');

var _LabelWithTooltip2 = _interopRequireDefault(_LabelWithTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Label = function Label(_ref) {
  var children = _ref.children,
      onRemoveClick = _ref.onRemoveClick,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['children', 'onRemoveClick', 'type']);

  return _react2.default.createElement(
    _Label2.default,
    _extends({ bsStyle: type }, props),
    children,
    !!onRemoveClick && _react2.default.createElement(_RemoveButton2.default, { onRemoveClick: onRemoveClick, title: 'Remove' })
  );
};

// WARNING: If you change propTypes you MUST also change DisposableLabel.propTypes
Label.propTypes = _extends({}, _Label2.default.propTypes, {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Label type */
  type: _propTypes2.default.string,
  /** callback when Label is removed  */
  onRemoveClick: _propTypes2.default.func
});

// WARNING: If you change defaultProps you MUST also change DisposableLabel.defaultProps
Label.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: undefined
};

Label.RemoveButton = _RemoveButton2.default;
Label.DisposableLabel = _DisposableLabel2.default;
Label.CompoundLabel = _CompoundLabel2.default;
Label.WithTooltop = _LabelWithTooltip2.default;

exports.default = Label;