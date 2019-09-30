import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

var TreeViewIcon = function TreeViewIcon(_ref) {
  var icon = _ref.icon;

  var classes = classNames('icon node-icon indent', icon);
  return React.createElement('span', { className: classes, 'aria-hidden': true });
};

TreeViewIcon.propTypes = {
  icon: PropTypes.string
};

TreeViewIcon.defaultProps = {
  icon: 'fa fa-folder'
};

export default TreeViewIcon;