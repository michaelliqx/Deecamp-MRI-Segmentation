'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FilterList = function FilterList(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  if (!children) {
    return null;
  }
  var classes = (0, _classnames2.default)('list-inline', className);
  return _react2.default.createElement(
    'ul',
    { className: classes },
    children
  );
};

FilterList.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string
};

FilterList.defaultProps = {
  children: null,
  className: ''
};

exports.default = FilterList;