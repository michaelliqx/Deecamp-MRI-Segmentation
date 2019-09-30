function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from 'recompose';
import { hasDisplayName, filterChildren } from '../../common/helpers';
import { Grid } from '../Grid';
import ToolbarResults from './ToolbarResults';
import ToolbarRightContent from './ToolbarRightContent';
import ToolbarFind from './ToolbarFind';
import ToolbarViewSelector from './ToolbarViewSelector';

import { toolbarContextTypes, getToolbarContext, ToolbarContextProvider } from './ToolbarConstants';

var ContextualToolbar = function ContextualToolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      preventSubmit = _ref.preventSubmit,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'preventSubmit']);

  var toolbarChildren = filterChildren(children, function (child) {
    return !hasDisplayName(child, ToolbarResults.displayName);
  });
  var resultsChildren = filterChildren(children, function (child) {
    return hasDisplayName(child, ToolbarResults.displayName);
  });

  return React.createElement(
    ToolbarContextProvider,
    { isDescendantOfToolbar: true },
    React.createElement(
      Grid,
      { fluid: true, className: className },
      React.createElement(
        Grid.Row,
        { className: 'toolbar-pf' },
        React.createElement(
          Grid.Col,
          { sm: 12 },
          React.createElement(
            'form',
            {
              className: 'toolbar-pf-actions',
              onSubmit: function onSubmit(e) {
                if (preventSubmit) {
                  e.preventDefault();
                }
              }
            },
            toolbarChildren
          ),
          resultsChildren
        )
      )
    )
  );
};

ContextualToolbar.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Prevent submission of toolbar children internal form */
  preventSubmit: PropTypes.bool
};

ContextualToolbar.defaultProps = {
  children: null,
  className: '',
  preventSubmit: false
};

var Toolbar = withContext(toolbarContextTypes, getToolbarContext)(ContextualToolbar);

Toolbar.Results = ToolbarResults;
Toolbar.RightContent = ToolbarRightContent;
Toolbar.Find = ToolbarFind;
Toolbar.ViewSelector = ToolbarViewSelector;

export default Toolbar;