import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger } from '../OverlayTrigger';
import { Tooltip } from '../Tooltip';

var VerticalNavBadge = function VerticalNavBadge(props) {
  var badgeClass = props.badgeClass,
      iconClass = props.iconClass,
      tooltip = props.tooltip,
      count = props.count;

  var key = badgeClass || iconClass || count;
  var badgeDiv = React.createElement(
    'div',
    { className: classNames('badge', badgeClass) },
    count && iconClass && React.createElement('span', { className: iconClass }),
    count && React.createElement(
      'span',
      null,
      count
    )
  );
  return !tooltip ? badgeDiv : React.createElement(
    OverlayTrigger,
    { key: key, placement: 'right', overlay: React.createElement(
        Tooltip,
        { id: key },
        tooltip
      ) },
    badgeDiv
  );
};

VerticalNavBadge.propTypes = {
  badgeClass: PropTypes.string,
  iconClass: PropTypes.string,
  tooltip: PropTypes.string,
  count: PropTypes.number
};
VerticalNavBadge.defaultProps = {
  badgeClass: '',
  iconClass: '',
  tooltip: '',
  count: undefined
};

VerticalNavBadge.displayName = 'VerticalNav.Badge';

export default VerticalNavBadge;