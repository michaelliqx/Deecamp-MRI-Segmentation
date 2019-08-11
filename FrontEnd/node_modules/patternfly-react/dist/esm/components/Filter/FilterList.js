function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var FilterList = function FilterList(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  if (!children) {
    return null;
  }
  var classes = classNames('list-inline', className);
  return React.createElement(
    'ul',
    { className: classes },
    children
  );
};

FilterList.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

FilterList.defaultProps = {
  children: null,
  className: ''
};

export default FilterList;