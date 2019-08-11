'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _PatternflyIcon = require('./InnerComponents/PatternflyIcon');

var _PatternflyIcon2 = _interopRequireDefault(_PatternflyIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icon = function Icon(_ref) {
  var type = _ref.type,
      props = _objectWithoutProperties(_ref, ['type']);

  var IconComponent = type === 'fa' && _reactFontawesome2.default || type === 'pf' && _PatternflyIcon2.default;
  if (IconComponent) {
    return _react2.default.createElement(IconComponent, props);
  }
  throw new Error('Unsupported prop type=' + type);
};
Icon.propTypes = {
  /** Icon type can be 'fa' or 'pf'.
   'fa' is the default type. */
  type: _propTypes2.default.oneOf(['fa', 'pf']),
  /** Icon name is the pf-name or fa-name without the prefix.
   e.g.: As for 'pf-ok' name will be 'ok' */
  name: _propTypes2.default.string.isRequired
};
Icon.defaultProps = {
  type: 'fa'
};
exports.default = Icon;