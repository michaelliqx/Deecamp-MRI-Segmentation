import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { noop } from '../../common/helpers';

/**
 * Pager component for Patternfly React
 */
var Pager = function Pager(_ref) {
  var baseClassName = _ref.baseClassName,
      className = _ref.className,
      messages = _ref.messages,
      disableNext = _ref.disableNext,
      onNextPage = _ref.onNextPage,
      disablePrevious = _ref.disablePrevious,
      onPreviousPage = _ref.onPreviousPage;

  var classes = classNames('pager', className);
  return React.createElement(
    'ul',
    { className: classes },
    React.createElement(
      'li',
      { className: classNames({ disabled: disablePrevious }, 'previous') },
      React.createElement(
        'a',
        {
          href: '#',
          className: classNames({ disabled: disablePrevious }),
          onClick: function onClick(e) {
            e.preventDefault();
            if (!disablePrevious) {
              onPreviousPage(e);
            }
          }
        },
        React.createElement(Icon, { className: 'i', name: 'angle-left' }),
        messages.previousPage
      )
    ),
    React.createElement(
      'li',
      { className: classNames({ disabled: disableNext }, 'next') },
      React.createElement(
        'a',
        {
          href: '#',
          className: classNames({ disabled: disableNext }),
          onClick: function onClick(e) {
            e.preventDefault();
            if (!disableNext) {
              onNextPage(e);
            }
          }
        },
        messages.nextPage,
        React.createElement(Icon, { className: 'i', name: 'angle-right' })
      )
    )
  );
};
Pager.propTypes = {
  /** Base css class */
  baseClassName: PropTypes.string,
  /** Additional css classes */
  className: PropTypes.string,
  /** message text inputs for i18n */
  messages: PropTypes.shape({
    nextPage: PropTypes.string,
    previousPage: PropTypes.string
  }),
  /** next button disabled */
  disableNext: PropTypes.bool,
  /** next page callback */
  onNextPage: PropTypes.func,
  /** previous button disabled */
  disablePrevious: PropTypes.bool,
  /** previous page callback */
  onPreviousPage: PropTypes.func
};
Pager.defaultProps = {
  baseClassName: 'content-view-pf-pagination',
  className: '',
  messages: {
    nextPage: 'Next',
    previousPage: 'Previous'
  },
  disableNext: false,
  onNextPage: noop,
  disablePrevious: false,
  onPreviousPage: noop
};
export default Pager;