'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ListGroup = require('../ListGroup');

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * WizardSidebarGroupItem component for Patternfly React
 */
var WizardSidebarGroupItem = function WizardSidebarGroupItem(_ref) {
  var stepIndex = _ref.stepIndex,
      subStepIndex = _ref.subStepIndex,
      className = _ref.className,
      subStep = _ref.subStep,
      label = _ref.label,
      title = _ref.title,
      activeSubStep = _ref.activeSubStep,
      _onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['stepIndex', 'subStepIndex', 'className', 'subStep', 'label', 'title', 'activeSubStep', 'onClick']);

  var classes = (0, _classnames2.default)({ active: '' + subStep === '' + activeSubStep }, className);
  return _react2.default.createElement(
    _ListGroup.ListGroupItem,
    _extends({ className: classes, listItem: true }, props),
    _react2.default.createElement(
      'a',
      {
        href: '#',
        onClick: function onClick(e) {
          e.preventDefault();
          _onClick(stepIndex, subStepIndex);
        }
      },
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
    )
  );
};
WizardSidebarGroupItem.propTypes = {
  /** The wizard parent step index */
  stepIndex: _propTypes2.default.number.isRequired,
  /** The wizard sub step index */
  subStepIndex: _propTypes2.default.number.isRequired,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** This wizard sub step name */
  subStep: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** This wizard sub step label */
  label: _propTypes2.default.string,
  /** This wizard sub step title */
  title: _propTypes2.default.string,
  /** The currently active wizard substep */
  activeSubStep: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** Sidebar group item click handler */
  onClick: _propTypes2.default.func
};
WizardSidebarGroupItem.defaultProps = {
  className: '',
  subStep: '',
  label: '',
  title: '',
  activeSubStep: '',
  onClick: _helpers.noop
};
exports.default = WizardSidebarGroupItem;