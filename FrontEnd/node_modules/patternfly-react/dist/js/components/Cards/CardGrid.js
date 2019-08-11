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

var _CardHeightMatching = require('./CardHeightMatching');

var _CardHeightMatching2 = _interopRequireDefault(_CardHeightMatching);

var _Grid = require('../Grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardGrid = function CardGrid(_ref) {
  var matchHeight = _ref.matchHeight,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['matchHeight', 'children', 'className']);

  var classes = (0, _classnames2.default)('container-cards-pf', className);
  var cardSelector = ['.card-pf-match-height'];

  if (matchHeight) {
    return _react2.default.createElement(
      _Grid.Grid,
      _extends({ className: classes }, props),
      _react2.default.createElement(
        _CardHeightMatching2.default,
        { selector: cardSelector },
        children
      )
    );
  }
  return _react2.default.createElement(
    _Grid.Grid,
    _extends({ className: classes }, props),
    children
  );
};

CardGrid.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes2.default.node.isRequired,
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** Match Height bool */
  matchHeight: _propTypes2.default.bool
};
CardGrid.defaultProps = {
  className: '',
  matchHeight: false
};

CardGrid.Row = _Grid.Row;
CardGrid.Col = _Grid.Col;
CardGrid.Clearfix = _Grid.Clearfix;

exports.default = CardGrid;