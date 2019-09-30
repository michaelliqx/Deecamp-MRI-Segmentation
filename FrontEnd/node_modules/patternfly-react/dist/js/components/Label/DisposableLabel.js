'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../common/helpers');

var _Label = require('react-bootstrap/lib/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Label3 = require('./Label');

var _Label4 = _interopRequireDefault(_Label3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisposableLabel = function DisposableLabel(props) {
  return _react2.default.createElement(_Label4.default, props);
};

// WARNING: This should be kept consistent with Label.propTypes
DisposableLabel.propTypes = _extends({}, _Label2.default.propTypes, {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Label type */
  type: _propTypes2.default.string,
  /** callback when Label is removed  */
  onRemoveClick: _propTypes2.default.func
});

// WARNING: This should be kept consistent with Label.defaultProps
DisposableLabel.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: _helpers.noop
};

exports.default = DisposableLabel;