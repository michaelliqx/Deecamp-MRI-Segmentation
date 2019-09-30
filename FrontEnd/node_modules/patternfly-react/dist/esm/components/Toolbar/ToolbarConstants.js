import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from 'recompose';

var toolbarContextTypes = { isDescendantOfToolbar: PropTypes.bool };

var getToolbarContext = function getToolbarContext(props) {
  return {
    isDescendantOfToolbar: props.isDescendantOfToolbar
  };
};

var provideToolbarContext = withContext(toolbarContextTypes, getToolbarContext);

var ToolbarContextProvider = provideToolbarContext(function (props) {
  return React.createElement(
    React.Fragment,
    null,
    props.children
  );
});

export { toolbarContextTypes, getToolbarContext, ToolbarContextProvider };