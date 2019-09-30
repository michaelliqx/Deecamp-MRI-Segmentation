import React from 'react';
import PropTypes from 'prop-types';
import { TypeAheadSelect } from './index';

var GithubMenuItem = function GithubMenuItem(props) {
  return React.createElement(
    'div',
    { key: props.option.id },
    React.createElement('img', { alt: 'avatar', height: '20px', src: props.option.avatar_url, style: { borderRadius: '10px', margin: '5px' } }),
    React.createElement(
      TypeAheadSelect.Highlighter,
      { search: props.text },
      props.option.login
    )
  );
};

GithubMenuItem.propTypes = {
  option: PropTypes.object.isRequired,
  text: PropTypes.string
};

GithubMenuItem.defaultProps = {
  text: null
};

export default GithubMenuItem;