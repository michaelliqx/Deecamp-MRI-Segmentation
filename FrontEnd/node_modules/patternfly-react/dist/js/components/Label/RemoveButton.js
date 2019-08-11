'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RemoveButton = function RemoveButton(_ref) {
  var className = _ref.className,
      title = _ref.title,
      onRemoveClick = _ref.onRemoveClick,
      props = _objectWithoutProperties(_ref, ['className', 'title', 'onRemoveClick']);

  var classes = (0, _classnames2.default)('pficon pficon-close', className);

  return _react2.default.createElement(
    'a',
    {
      href: '#',
      onClick: function onClick(e) {
        e.preventDefault();
        onRemoveClick && onRemoveClick();
      },
      className: 'pf-remove-button'
    },
    _react2.default.createElement('span', _extends({ className: classes }, props, { 'aria-hidden': 'true' })),
    _react2.default.createElement(
      'span',
      { className: 'sr-only' },
      title
    )
  );
};

RemoveButton.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Reader title text */
  title: _propTypes2.default.string,
  /** Callback when remove button is clicked */
  onRemoveClick: _propTypes2.default.func
};

RemoveButton.defaultProps = {
  className: '',
  title: 'Remove',
  onRemoveClick: _helpers.noop
};

exports.default = RemoveButton;