import React from 'react';
import PropTypes from 'prop-types';

var VerticalNavBrand = function VerticalNavBrand(props) {
  var title = props.title,
      href = props.href,
      onClick = props.onClick,
      iconImg = props.iconImg,
      children = props.children;
  // The img prop is just a shorthand for the titleImg prop.
  // When also using iconImg, it is less confusing to pass titleImg instead of img.

  var titleImg = props.titleImg || props.img;

  var brandChildren = children || React.createElement(
    'span',
    null,
    iconImg && React.createElement('img', { className: 'navbar-brand-icon', src: iconImg, alt: title }),
    titleImg && React.createElement('img', { className: 'navbar-brand-name', src: titleImg, alt: title }),
    !titleImg && title && React.createElement(
      'span',
      { className: 'navbar-brand-txt' },
      title
    )
  );
  return href || onClick ? React.createElement(
    'a',
    { href: href, onClick: onClick, className: 'navbar-brand' },
    brandChildren
  ) : React.createElement(
    'span',
    { className: 'navbar-brand' },
    brandChildren
  );
};

VerticalNavBrand.propTypes = {
  /** Title of the application (use either this or titleImg) */
  title: PropTypes.string,
  /** URL of an image for the app's title (use either this or title) */
  titleImg: PropTypes.string,
  /** Alias for titleImg */
  img: PropTypes.string,
  /** URL of an image for the app's icon */
  iconImg: PropTypes.string,
  /** URL of the application's homepage if the title should be a link */
  href: PropTypes.string,
  /** Alternative to href, callback to call when the brand link is clicked */
  onClick: PropTypes.func,
  /** Custom children components to render instead. If passed, above props are ignored. */
  children: PropTypes.node
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

export default VerticalNavBrand;