import { ALERT_TYPE_DANGER, ALERT_TYPE_ERROR, ALERT_TYPE_WARNING, ALERT_TYPE_SUCCESS, ALERT_TYPE_INFO } from './AlertConstants';

export var warnIfDeprecatedType = function warnIfDeprecatedType(type) {
  if (type === ALERT_TYPE_DANGER) {
    // eslint-disable-next-line no-console
    console.warn('\n      Warning: Deprecated Alert.type=\'' + ALERT_TYPE_DANGER + '\'.\n      Please migrate to Alert.type=\'' + ALERT_TYPE_ERROR + '\'\n    ');
  }
};

export var getIconName = function getIconName(type) {
  switch (type) {
    case ALERT_TYPE_DANGER:
    case ALERT_TYPE_ERROR:
      return 'error-circle-o';
    case ALERT_TYPE_WARNING:
      return 'warning-triangle-o';
    case ALERT_TYPE_SUCCESS:
      return 'ok';
    case ALERT_TYPE_INFO:
      return 'info';
    default:
      throw new Error('Unsupported alert type=' + type);
  }
};

export var getClassName = function getClassName(type) {
  switch (type) {
    case ALERT_TYPE_DANGER:
    case ALERT_TYPE_ERROR:
      return 'alert-danger';
    case ALERT_TYPE_WARNING:
      return 'alert-warning';
    case ALERT_TYPE_SUCCESS:
      return 'alert-success';
    case ALERT_TYPE_INFO:
      return 'alert-info';
    default:
      throw new Error('Unsupported alert type=' + type);
  }
};