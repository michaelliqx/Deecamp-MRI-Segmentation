import React from 'react';
import PropTypes from 'prop-types';

var TreeViewIndents = function TreeViewIndents(_ref) {
  var level = _ref.level;

  var indents = [];

  if (level === 1) {
    return null;
  }
  for (var i = 1; i <= (level - 1) * 4; i++) {
    indents.push(React.createElement('span', { className: 'indent', key: i }));
  }

  return React.createElement(
    React.Fragment,
    null,
    indents
  );
};

TreeViewIndents.propTypes = {
  level: PropTypes.number.isRequired
};

export default TreeViewIndents;