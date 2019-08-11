'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListGroup = require('../ListGroup');

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * WizardReviewSubStep component for Patternfly React
 */
var WizardReviewSubStep = function WizardReviewSubStep(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      label = _ref.label,
      title = _ref.title,
      collapsed = _ref.collapsed,
      props = _objectWithoutProperties(_ref, ['children', 'onClick', 'label', 'title', 'collapsed']);

  return _react2.default.createElement(
    _ListGroup.ListGroupItem,
    _extends({ listItem: true }, props),
    _react2.default.createElement(
      'a',
      { href: '#', onClick: onClick, className: collapsed ? 'collapsed' : '' },
      _react2.default.createElement(
        'span',
        { className: 'wizard-pf-substep-number' },
        label
      ),
      _react2.default.createElement(
        'span',
        { className: 'wizard-pf-substep-title' },
        title
      )
    ),
    children
  );
};
WizardReviewSubStep.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Click handler */
  onClick: _propTypes2.default.func,
  /** Review step label */
  label: _propTypes2.default.string,
  /** Review step title */
  title: _propTypes2.default.string,
  /** Step collapsed */
  collapsed: _propTypes2.default.bool
};
WizardReviewSubStep.defaultProps = {
  children: null,
  onClick: _helpers.noop,
  label: '',
  title: '',
  collapsed: false
};
exports.default = WizardReviewSubStep;