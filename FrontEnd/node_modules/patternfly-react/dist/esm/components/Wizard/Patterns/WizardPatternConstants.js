import PropTypes from 'prop-types';

var wizardStepShape = {
  title: PropTypes.string,
  render: PropTypes.func,
  onNext: PropTypes.func,
  isInvalid: PropTypes.bool,
  preventEnter: PropTypes.bool,
  preventExit: PropTypes.bool
};

export { wizardStepShape };