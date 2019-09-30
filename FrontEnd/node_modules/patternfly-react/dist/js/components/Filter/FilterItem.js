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

var _Label = require('../Label');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FilterItem = function FilterItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onRemove = _ref.onRemove,
      filterData = _ref.filterData,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'onRemove', 'filterData']);

  var classes = (0, _classnames2.default)(className);

  return _react2.default.createElement(
    'li',
    _extends({ className: classes }, props),
    _react2.default.createElement(
      _Label.DisposableLabel,
      { type: 'info', onRemoveClick: function onRemoveClick() {
          return onRemove(filterData);
        } },
      children
    )
  );
};

FilterItem.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** additional filter item classes */
  className: _propTypes2.default.string,
  /** callback when filter is removed  */
  onRemove: _propTypes2.default.func,
  /** Data to pass to onRemove function */
  filterData: _propTypes2.default.object
};

FilterItem.defaultProps = {
  children: null,
  className: '',
  onRemove: _helpers.noop,
  filterData: {}
};
exports.default = FilterItem;