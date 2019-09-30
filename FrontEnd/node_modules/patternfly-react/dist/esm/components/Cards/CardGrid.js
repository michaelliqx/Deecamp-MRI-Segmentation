var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import CardHeightMatching from './CardHeightMatching';
import { Grid, Row, Col, Clearfix } from '../Grid';

var CardGrid = function CardGrid(_ref) {
  var matchHeight = _ref.matchHeight,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['matchHeight', 'children', 'className']);

  var classes = classNames('container-cards-pf', className);
  var cardSelector = ['.card-pf-match-height'];

  if (matchHeight) {
    return React.createElement(
      Grid,
      _extends({ className: classes }, props),
      React.createElement(
        CardHeightMatching,
        { selector: cardSelector },
        children
      )
    );
  }
  return React.createElement(
    Grid,
    _extends({ className: classes }, props),
    children
  );
};

CardGrid.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Match Height bool */
  matchHeight: PropTypes.bool
};
CardGrid.defaultProps = {
  className: '',
  matchHeight: false
};

CardGrid.Row = Row;
CardGrid.Col = Col;
CardGrid.Clearfix = Clearfix;

export default CardGrid;