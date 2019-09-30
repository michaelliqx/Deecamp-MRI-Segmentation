var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { default as Timer } from './Timer';
import { closest as closestPolyfill } from './closestPolyfill';
import { default as controlled } from './controlled';
import { patternfly, c3ChartDefaults, layout } from './patternfly';

/** Equivalent to calling `this.someMethod = this.someMethod.bind(this)` for every method name in the methods array. */
export var bindMethods = function bindMethods(context, methods) {
  // eslint-disable-next-line no-console
  console.warn('\n   bindMethods usage is deprecated in favor of class methods.\n   bindMethods will be removed in the next major release\n   ');
  methods.forEach(function (method) {
    context[method] = context[method].bind(context);
  });
};

/** Implementation of the debounce function */
export var debounce = function debounce(func, wait) {
  var timeout = void 0;
  function innerFunc() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(context, args);
    }, wait);
  }
  return innerFunc;
};

/** Returns true if propName is a non-null, defined property of the props object (can be any object, not just React props). */
export var propExists = function propExists(props, propName) {
  return props && props.hasOwnProperty(propName) && props[propName] != null;
};

/** Given two objects (props and state), returns the value of propName from props if present, or from state otherwise. */
export var propOrState = function propOrState(props, state, propName) {
  return propExists(props, propName) ? props[propName] : state[propName];
};

/** Returns a subset of the given object including only the given keys, with values optionally replaced by a fn. */
export var selectKeys = function selectKeys(obj, keys) {
  var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (val) {
    return val;
  };
  return keys.reduce(function (values, key) {
    return _extends({}, values, _defineProperty({}, key, fn(obj[key])));
  }, {});
};

/** Returns a subset of the given object with a validator function applied to its keys. */
export var filterKeys = function filterKeys(obj, validator) {
  return selectKeys(obj, Object.keys(obj).filter(validator));
};

/** Returns a subset of the given object with the given keys left out. */
export var excludeKeys = function excludeKeys(obj, keys) {
  return filterKeys(obj, function (key) {
    return !keys.includes(key);
  });
};

/** Returns the given React children prop as a regular array of React nodes. */
export var childrenToArray = function childrenToArray(children) {
  return children && React.Children.count(children) > 0 && React.Children.toArray(children);
};

/** Filters the given React children prop with the given validator function. Returns an array of nodes. */
export var filterChildren = function filterChildren(children, validator) {
  var array = childrenToArray(children);
  return array && array.filter(validator);
};

/** Given a React children prop, finds the first child node to pass the validator function. */
export var findChild = function findChild(children, validator) {
  var array = childrenToArray(children);
  return array && array.find(validator);
};

/** Returns true if there is at least one of propNames with a different value in newProps than in oldProps. */
export var propsChanged = function propsChanged(propNames, oldProps, newProps) {
  return propNames.some(function (propName) {
    return oldProps[propName] !== newProps[propName];
  });
};

/** Returns true if the component has the desired displayName value */
export var hasDisplayName = function hasDisplayName(component, displayName) {
  return component && component.type && component.type.displayName === displayName;
};

/** Returns an object with the same keys as the given one, but all null values. */
export var nullValues = function nullValues(obj) {
  return selectKeys(obj, Object.keys(obj), function () {
    return null;
  });
};

export var noop = Function.prototype;

export var KEY_CODES = {
  TAB_KEY: 9,
  ENTER_KEY: 13,
  ESCAPE_KEY: 27,
  SHIFT: 16,
  A: 65,
  Z: 90,
  NUMPAD: { 0: 97 },
  F11: 122
};
export var KEYS = {
  ENTER: 'Enter',
  CAPSLOCK: 'CapsLock',
  SPACE: ' ',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  HOME: 'Home',
  END: 'End'
};

export var helpers = {
  Timer: Timer,
  closestPolyfill: closestPolyfill,
  controlled: controlled,
  patternfly: patternfly,
  c3ChartDefaults: c3ChartDefaults,
  layout: layout,
  debounce: debounce,
  propExists: propExists,
  propOrState: propOrState,
  selectKeys: selectKeys,
  filterKeys: filterKeys,
  excludeKeys: excludeKeys,
  childrenToArray: childrenToArray,
  filterChildren: filterChildren,
  findChild: findChild,
  propsChanged: propsChanged,
  hasDisplayName: hasDisplayName,
  nullValues: nullValues,
  noop: noop,
  KEY_CODES: KEY_CODES,
  KEYS: KEYS
};

export default helpers;