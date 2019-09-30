'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _InlineEdit = require('../InlineEdit');

var _helpers = require('../../common/helpers');

require('../../common/closestPolyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableConfirmButtonsRow = function (_React$Component) {
  _inherits(TableConfirmButtonsRow, _React$Component);

  function TableConfirmButtonsRow(props) {
    _classCallCheck(this, TableConfirmButtonsRow);

    var _this = _possibleConstructorReturn(this, (TableConfirmButtonsRow.__proto__ || Object.getPrototypeOf(TableConfirmButtonsRow)).call(this, props));

    _this.saveRowDimensions = function (element) {
      if (element) {
        _this.element = element;
      }
      if (_this.element) {
        _this.setState({
          rowDimensions: _this.element.getBoundingClientRect()
        });
      }
    };

    _this.handleScroll = function (event) {
      _this.saveRowDimensions();
    };

    _this.handleResize = function (event) {
      _this.fetchClientDimensions();
      _this.saveRowDimensions();
    };

    _this.state = {};

    _this.handleScroll = (0, _helpers.debounce)(_this.handleScroll, 100);
    _this.handleResize = (0, _helpers.debounce)(_this.handleResize, 100);
    return _this;
  }

  _createClass(TableConfirmButtonsRow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchClientDimensions();
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'fetchClientDimensions',
    value: function fetchClientDimensions() {
      this.setState({
        window: {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        }
      });
    }
  }, {
    key: 'renderConfirmButtons',
    value: function renderConfirmButtons() {
      var _this2 = this;

      var divStyle = this.state.rowDimensions ? this.props.buttonsPosition(this.state.window, this.element.getBoundingClientRect()) : {};

      var buttonsClass = 'inline-edit-buttons ' + this.props.buttonsClassName;
      return _react2.default.createElement(
        'div',
        { style: divStyle, className: buttonsClass, key: 'confirmButtons' },
        _react2.default.createElement(_InlineEdit.ConfirmButton, {
          bsStyle: 'primary',
          key: 'confirm',
          'aria-label': this.props.messages.confirmButtonLabel,
          onMouseUp: function onMouseUp() {
            return _this2.props.onConfirm();
          }
        }),
        _react2.default.createElement(_InlineEdit.CancelButton, {
          bsStyle: 'default',
          key: 'cancel',
          'aria-label': this.props.messages.cancelButtonLabel,
          onMouseUp: function onMouseUp() {
            return _this2.props.onCancel();
          }
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var editing = this.props.isEditing();
      var rowClass = editing ? 'editing' : '';

      var elements = [_react2.default.createElement(
        'tr',
        { ref: this.saveRowDimensions, className: rowClass, key: 'tableRow' },
        this.props.children
      )];

      if (editing && (this.element || this.props.buttonsMountpoint)) {
        elements.push(
        // mount the confirm buttons below the table
        (0, _reactDom.createPortal)(this.renderConfirmButtons(), this.props.buttonsMountpoint || this.element.closest('table').parentNode));
      }

      return elements;
    }
  }]);

  return TableConfirmButtonsRow;
}(_react2.default.Component);

TableConfirmButtonsRow.shouldComponentUpdate = true;

TableConfirmButtonsRow.defaultProps = {
  isEditing: _helpers.noop,
  onConfirm: _helpers.noop,
  onCancel: _helpers.noop,
  buttonsPosition: _helpers.noop,
  buttonsClassName: '',
  children: [],
  messages: {
    confirmButtonLabel: 'Save',
    cancelButtonLabel: 'Cancel'
  },
  buttonsMountpoint: undefined
};

TableConfirmButtonsRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: _propTypes2.default.func,
  /** Confirm edit callback */
  onConfirm: _propTypes2.default.func,
  /** Cancel edit callback */
  onCancel: _propTypes2.default.func,
  /** Inject confirm buttons positions */
  buttonsPosition: _propTypes2.default.func,
  /** Additional confirm buttons classes */
  buttonsClassName: _propTypes2.default.string,
  /** Row cells */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /** Message text inputs for i18n */
  messages: _propTypes2.default.shape({
    confirmButtonLabel: _propTypes2.default.string,
    cancelButtonLabel: _propTypes2.default.string
  }),
  buttonsMountpoint: _propTypes2.default.any
};

exports.default = TableConfirmButtonsRow;