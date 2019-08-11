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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * ListViewInfoItem renders contents of individual Info item
 */
var ListViewInfoItem = function ListViewInfoItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stacked = _ref.stacked,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'stacked']);

  var classes = (0, _classnames2.default)({ 'list-view-pf-additional-info-item-stacked': stacked }, 'list-view-pf-additional-info-item', className);
  return _react2.default.createElement(
    'div',
    _extends({ className: classes, onClick: function onClick(e) {
        return e.stopPropagation();
      } }, props),
    children
  );
};
ListViewInfoItem.propTypes = {
  /** Child node - contents of the additional info item */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Toggle the InfoItem contents stacking */
  stacked: _propTypes2.default.bool
};
ListViewInfoItem.defaultProps = {
  children: null,
  className: '',
  stacked: false
};
exports.default = ListViewInfoItem;