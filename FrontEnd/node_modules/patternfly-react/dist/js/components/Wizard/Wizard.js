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

var _Modal = require('../Modal');

var _WizardBody = require('./WizardBody');

var _WizardBody2 = _interopRequireDefault(_WizardBody);

var _WizardContents = require('./WizardContents');

var _WizardContents2 = _interopRequireDefault(_WizardContents);

var _WizardFooter = require('./WizardFooter');

var _WizardFooter2 = _interopRequireDefault(_WizardFooter);

var _WizardHeader = require('./WizardHeader');

var _WizardHeader2 = _interopRequireDefault(_WizardHeader);

var _WizardMain = require('./WizardMain');

var _WizardMain2 = _interopRequireDefault(_WizardMain);

var _WizardReviewContent = require('./WizardReviewContent');

var _WizardReviewContent2 = _interopRequireDefault(_WizardReviewContent);

var _WizardReviewItem = require('./WizardReviewItem');

var _WizardReviewItem2 = _interopRequireDefault(_WizardReviewItem);

var _WizardReviewStep = require('./WizardReviewStep');

var _WizardReviewStep2 = _interopRequireDefault(_WizardReviewStep);

var _WizardReviewSteps = require('./WizardReviewSteps');

var _WizardReviewSteps2 = _interopRequireDefault(_WizardReviewSteps);

var _WizardReviewSubStep = require('./WizardReviewSubStep');

var _WizardReviewSubStep2 = _interopRequireDefault(_WizardReviewSubStep);

var _WizardReviewSubSteps = require('./WizardReviewSubSteps');

var _WizardReviewSubSteps2 = _interopRequireDefault(_WizardReviewSubSteps);

var _WizardRow = require('./WizardRow');

var _WizardRow2 = _interopRequireDefault(_WizardRow);

var _WizardSidebar = require('./WizardSidebar');

var _WizardSidebar2 = _interopRequireDefault(_WizardSidebar);

var _WizardSidebarGroup = require('./WizardSidebarGroup');

var _WizardSidebarGroup2 = _interopRequireDefault(_WizardSidebarGroup);

var _WizardSidebarGroupItem = require('./WizardSidebarGroupItem');

var _WizardSidebarGroupItem2 = _interopRequireDefault(_WizardSidebarGroupItem);

var _WizardStep = require('./WizardStep');

var _WizardStep2 = _interopRequireDefault(_WizardStep);

var _WizardSteps = require('./WizardSteps');

var _WizardSteps2 = _interopRequireDefault(_WizardSteps);

var _WizardSubStep = require('./WizardSubStep');

var _WizardSubStep2 = _interopRequireDefault(_WizardSubStep);

var _WizardPattern = require('./Patterns/WizardPattern');

var _WizardPattern2 = _interopRequireDefault(_WizardPattern);

var _WizardPatternBody = require('./Patterns/WizardPatternBody');

var _WizardPatternBody2 = _interopRequireDefault(_WizardPatternBody);

var _StatefulWizardPattern = require('./Patterns/StatefulWizardPattern');

var _StatefulWizardPattern2 = _interopRequireDefault(_StatefulWizardPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Wizard - main Wizard component.
 */
var Wizard = function Wizard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      dialogClassName = _ref.dialogClassName,
      show = _ref.show,
      onClose = _ref.onClose,
      onExited = _ref.onExited,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'dialogClassName', 'show', 'onClose', 'onExited']);

  return _react2.default.createElement(
    _Modal.Modal,
    _extends({
      show: show,
      onHide: onClose,
      onExited: onExited,
      dialogClassName: dialogClassName || 'modal-lg wizard-pf'
    }, rest),
    _react2.default.createElement(
      'div',
      { className: className },
      children
    )
  );
};
Wizard.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Wizard dialog class */
  dialogClassName: _propTypes2.default.string,
  /** show modal */
  show: _propTypes2.default.bool,
  /** on close callback */
  onClose: _propTypes2.default.func,
  /** on exited callback */
  onExited: _propTypes2.default.func
};
Wizard.defaultProps = {
  children: null,
  className: '',
  dialogClassName: '',
  show: false,
  onClose: _helpers.noop,
  onExited: _helpers.noop
};

Wizard.Body = _WizardBody2.default;
Wizard.Contents = _WizardContents2.default;
Wizard.Footer = _WizardFooter2.default;
Wizard.Header = _WizardHeader2.default;
Wizard.Main = _WizardMain2.default;
Wizard.ReviewContent = _WizardReviewContent2.default;
Wizard.ReviewItem = _WizardReviewItem2.default;
Wizard.ReviewStep = _WizardReviewStep2.default;
Wizard.ReviewSteps = _WizardReviewSteps2.default;
Wizard.ReviewSubStep = _WizardReviewSubStep2.default;
Wizard.ReviewSubSteps = _WizardReviewSubSteps2.default;
Wizard.Row = _WizardRow2.default;
Wizard.Sidebar = _WizardSidebar2.default;
Wizard.SidebarGroup = _WizardSidebarGroup2.default;
Wizard.SidebarGroupItem = _WizardSidebarGroupItem2.default;
Wizard.Step = _WizardStep2.default;
Wizard.Steps = _WizardSteps2.default;
Wizard.SubStep = _WizardSubStep2.default;

Wizard.Pattern = _WizardPattern2.default;
Wizard.Pattern.Body = _WizardPatternBody2.default;
Wizard.Pattern.Stateful = _StatefulWizardPattern2.default;

exports.default = Wizard;