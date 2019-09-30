'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubMenuItem = function GithubMenuItem(props) {
  return _react2.default.createElement(
    'div',
    { key: props.option.id },
    _react2.default.createElement('img', { alt: 'avatar', height: '20px', src: props.option.avatar_url, style: { borderRadius: '10px', margin: '5px' } }),
    _react2.default.createElement(
      _index.TypeAheadSelect.Highlighter,
      { search: props.text },
      props.option.login
    )
  );
};

GithubMenuItem.propTypes = {
  option: _propTypes2.default.object.isRequired,
  text: _propTypes2.default.string
};

GithubMenuItem.defaultProps = {
  text: null
};

exports.default = GithubMenuItem;