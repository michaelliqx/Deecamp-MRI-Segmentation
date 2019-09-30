'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../../index');

var _helpers = require('../../../common/helpers');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListArrows = function DualListArrows(_ref) {
  var right = _ref.right,
      left = _ref.left;
  return _react2.default.createElement(
    'div',
    { className: 'dual-list-pf-arrows' },
    _react2.default.createElement(_index.Icon, {
      'aria-label': right.ariaLabel,
      name: 'chevron-circle-down',
      size: 'lg',
      tabIndex: '0',
      onClick: right.onClick,
      onKeyPress: right.onClick
    }),
    _react2.default.createElement(_index.Icon, {
      'aria-label': left.ariaLabel,
      name: 'chevron-circle-up',
      size: 'lg',
      tabIndex: '0',
      onClick: left.onClick,
      onKeyPress: left.onClick
    })
  );
};

DualListArrows.propTypes = {
  left: _propTypes2.default.shape({
    /** Determine what happens on left/up arrow click */
    onClick: _propTypes2.default.func,
    /** Set the left/up arrow aria-label */
    ariaLabel: _propTypes2.default.string
  }),
  right: _propTypes2.default.shape({
    onClick: _propTypes2.default.func,
    ariaLabel: _propTypes2.default.string
  })
};

DualListArrows.defaultProps = {
  left: {
    onClick: _helpers.noop,
    ariaLabel: _constants.LEFT_ARROW_ARIA_LABEL
  },
  right: {
    onClick: _helpers.noop,
    ariaLabel: _constants.RIGHT_ARROW_ARIA_LABEL
  }
};

exports.default = DualListArrows;