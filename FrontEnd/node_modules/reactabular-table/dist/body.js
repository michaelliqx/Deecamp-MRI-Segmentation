'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('./types');

var _bodyRow = require('./body-row');

var _bodyRow2 = _interopRequireDefault(_bodyRow);

var _resolveRowKey = require('./resolve-row-key');

var _resolveRowKey2 = _interopRequireDefault(_resolveRowKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body(props) {
    _classCallCheck(this, Body);

    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

    _this.ref = null;
    return _this;
  }

  _createClass(Body, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      // eslint-disable-line no-unused-vars
      // Skip checking props against `onRow` since that can be bound at render().
      // That's not particularly good practice but you never know how the users
      // prefer to define the handler.

      // Check for wrapper based override.
      var renderers = nextContext.renderers;


      if (renderers && renderers.body && renderers.body.wrapper.shouldComponentUpdate) {
        if ((0, _isFunction3.default)(renderers.body.wrapper.shouldComponentUpdate)) {
          return renderers.body.wrapper.shouldComponentUpdate.call(this, nextProps, nextState, nextContext);
        }

        return true;
      }

      return !((0, _isEqual3.default)(omitOnRow(this.props), omitOnRow(nextProps)) && (0, _isEqual3.default)(this.context, nextContext));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onRow = _props.onRow,
          rows = _props.rows,
          rowKey = _props.rowKey,
          props = _objectWithoutProperties(_props, ['onRow', 'rows', 'rowKey']);

      var _context = this.context,
          columns = _context.columns,
          renderers = _context.renderers;


      props.ref = function (body) {
        _this2.ref = body;
      };

      return _react2.default.createElement(renderers.body.wrapper, props, rows.map(function (rowData, index) {
        var rowIndex = rowData._index || index;
        var key = (0, _resolveRowKey2.default)({ rowData: rowData, rowIndex: rowIndex, rowKey: rowKey });

        return _react2.default.createElement(_bodyRow2.default, {
          key: key,
          renderers: renderers.body,
          onRow: onRow,
          rowKey: key,
          rowIndex: rowIndex,
          rowData: rowData,
          columns: columns
        });
      }));
    }
  }, {
    key: 'getRef',
    value: function getRef() {
      return this.ref;
    }
  }]);

  return Body;
}(_react2.default.Component);

process.env.NODE_ENV !== "production" ? Body.propTypes = _types.tableBodyTypes : void 0;
Body.defaultProps = _types.tableBodyDefaults;
Body.contextTypes = _types.tableBodyContextTypes;

function omitOnRow(props) {
  var onRow = props.onRow,
      ret = _objectWithoutProperties(props, ['onRow']); // eslint-disable-line no-unused-vars

  return ret;
}

exports.default = Body;