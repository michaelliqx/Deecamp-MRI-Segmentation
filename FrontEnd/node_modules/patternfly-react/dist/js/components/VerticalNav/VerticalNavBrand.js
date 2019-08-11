'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticalNavBrand = function VerticalNavBrand(props) {
  var title = props.title,
      href = props.href,
      onClick = props.onClick,
      iconImg = props.iconImg,
      children = props.children;
  // The img prop is just a shorthand for the titleImg prop.
  // When also using iconImg, it is less confusing to pass titleImg instead of img.

  var titleImg = props.titleImg || props.img;

  var brandChildren = children || _react2.default.createElement(
    'span',
    null,
    iconImg && _react2.default.createElement('img', { className: 'navbar-brand-icon', src: iconImg, alt: title }),
    titleImg && _react2.default.createElement('img', { className: 'navbar-brand-name', src: titleImg, alt: title }),
    !titleImg && title && _react2.default.createElement(
      'span',
      { className: 'navbar-brand-txt' },
      title
    )
  );
  return href || onClick ? _react2.default.createElement(
    'a',
    { href: href, onClick: onClick, className: 'navbar-brand' },
    brandChildren
  ) : _react2.default.createElement(
    'span',
    { className: 'navbar-brand' },
    brandChildren
  );
};

VerticalNavBrand.propTypes = {
  /** Title of the application (use either this or titleImg) */
  title: _propTypes2.default.string,
  /** URL of an image for the app's title (use either this or title) */
  titleImg: _propTypes2.default.string,
  /** Alias for titleImg */
  img: _propTypes2.default.string,
  /** URL of an image for the app's icon */
  iconImg: _propTypes2.default.string,
  /** URL of the application's homepage if the title should be a link */
  href: _propTypes2.default.string,
  /** Alternative to href, callback to call when the brand link is clicked */
  onClick: _propTypes2.default.func,
  /** Custom children components to render instead. If passed, above props are ignored. */
  children: _propTypes2.default.node
};
VerticalNavBrand.defaultProps = {
  title: '',
  titleImg: '',
  img: '',
  iconImg: '',
  href: '',
  onClick: null, // noop should not be used b/c onClick differentiates render
  children: null
};
VerticalNavBrand.displayName = 'VerticalNav.Brand';

exports.default = VerticalNavBrand;