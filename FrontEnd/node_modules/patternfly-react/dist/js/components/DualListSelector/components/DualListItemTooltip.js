'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListItemTooltip = function DualListItemTooltip(_ref) {
  var id = _ref.id,
      text = _ref.text,
      children = _ref.children;

  var tooltip = _react2.default.createElement(
    _index.Tooltip,
    { id: id },
    text
  );
  return _react2.default.createElement(
    _index.OverlayTrigger,
    { overlay: tooltip, placement: 'top', trigger: ['hover', 'focus'], delayShow: 150 },
    children
  );
};

DualListItemTooltip.propTypes = {
  /** unique tooltip ID */
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** text to be shown on the tooltip */
  text: _propTypes2.default.string,
  /** children nodes */
  children: _propTypes2.default.node
};

DualListItemTooltip.defaultProps = {
  id: null,
  text: null,
  children: null
};

exports.default = DualListItemTooltip;