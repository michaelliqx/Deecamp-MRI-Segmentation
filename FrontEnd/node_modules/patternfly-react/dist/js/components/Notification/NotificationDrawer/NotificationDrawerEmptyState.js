'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EmptyState = require('../../EmptyState');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NotificationDrawerEmptyState = function NotificationDrawerEmptyState(_ref) {
  var title = _ref.title,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['title', 'className']);

  return _react2.default.createElement(
    _EmptyState.EmptyState,
    null,
    _react2.default.createElement(_EmptyState.EmptyStateIcon, { name: 'info' }),
    _react2.default.createElement(
      _EmptyState.EmptyStateTitle,
      null,
      title
    )
  );
};
NotificationDrawerEmptyState.propTypes = {
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** Title */
  title: _propTypes2.default.string
};
NotificationDrawerEmptyState.defaultProps = {
  className: '',
  title: 'No Notifications Available'
};

exports.default = NotificationDrawerEmptyState;