var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CustomModalDialog creates custom ReactBootstrap ModalDialog
 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/ModalDialog.js
 *
 * This extends ModalDialog and adds contentClassName prop for setting
 * `modal-content` div's class
 */
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import * as utils from 'react-bootstrap/lib/utils';

var bsClass = utils.bootstrapUtils.bsClass;
var bsSizes = utils.bootstrapUtils.bsSizes;
var getClassSet = utils.bootstrapUtils.getClassSet;
var prefix = utils.bootstrapUtils.prefix;
var splitBsProps = utils.bootstrapUtils.splitBsProps;

// React Bootstrap utils/StyleConfig Size is currently not exported

var Size = {
  LARGE: 'large',
  SMALL: 'small'
};

// eslint-disable-next-line react/prefer-stateless-function

var CustomModalDialog = function (_React$Component) {
  _inherits(CustomModalDialog, _React$Component);

  function CustomModalDialog() {
    _classCallCheck(this, CustomModalDialog);

    return _possibleConstructorReturn(this, (CustomModalDialog.__proto__ || Object.getPrototypeOf(CustomModalDialog)).apply(this, arguments));
  }

  _createClass(CustomModalDialog, [{
    key: 'render',
    value: function render() {
      var _extends2;

      var _props = this.props,
          dialogClassName = _props.dialogClassName,
          contentClassName = _props.contentClassName,
          className = _props.className,
          style = _props.style,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['dialogClassName', 'contentClassName', 'className', 'style', 'children']);

      var _splitBsProps = splitBsProps(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      var bsClassName = prefix(bsProps);

      var modalStyle = _extends({ display: 'block' }, style);

      var dialogClasses = _extends({}, getClassSet(bsProps), (_extends2 = {}, _defineProperty(_extends2, bsClassName, false), _defineProperty(_extends2, prefix(bsProps, 'dialog'), true), _extends2));

      return React.createElement(
        'div',
        _extends({}, elementProps, {
          tabIndex: '-1',
          role: 'dialog',
          style: modalStyle,
          className: classNames(className, bsClassName)
        }),
        React.createElement(
          'div',
          { className: classNames(dialogClassName, dialogClasses) },
          React.createElement(
            'div',
            { className: classNames(prefix(bsProps, 'content'), contentClassName), role: 'document' },
            children
          )
        )
      );
    }
  }]);

  return CustomModalDialog;
}(React.Component);

CustomModalDialog.propTypes = {
  /** A css class to apply to the Modal dialog DOM node. */
  dialogClassName: PropTypes.string,
  /** custom modal-content class added to the content DOM node */
  contentClassName: PropTypes.string,
  /** base modal class name */
  className: PropTypes.string,
  /** additional modal styles */
  style: PropTypes.object,
  /** Children nodes */
  children: PropTypes.node
};

CustomModalDialog.defaultProps = {
  dialogClassName: '',
  contentClassName: '',
  className: '',
  style: {},
  children: null
};

export default bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], CustomModalDialog));