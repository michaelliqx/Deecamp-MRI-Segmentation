'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('./types');

var _headerRow = require('./header-row');

var _headerRow2 = _interopRequireDefault(_headerRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  // eslint-disable-line max-len, react/prefer-stateless-function
  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.ref = null;
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          headerRows = _props.headerRows,
          onRow = _props.onRow,
          props = _objectWithoutProperties(_props, ['children', 'headerRows', 'onRow']);

      var _context = this.context,
          renderers = _context.renderers,
          columns = _context.columns;


      props.ref = function (header) {
        _this2.ref = header;
      };

      // If headerRows aren't passed, default to bodyColumns as header rows
      return _react2.default.createElement(renderers.header.wrapper, props, [(headerRows || [columns]).map(function (rowData, rowIndex) {
        return _react2.default.createElement(_headerRow2.default, {
          key: rowIndex + '-header-row',
          renderers: renderers.header,
          onRow: onRow,
          rowData: rowData,
          rowIndex: rowIndex
        });
      })].concat(children));
    }
  }, {
    key: 'getRef',
    value: function getRef() {
      return this.ref;
    }
  }]);

  return Header;
}(_react2.default.Component);

process.env.NODE_ENV !== "production" ? Header.propTypes = _types.tableHeaderTypes : void 0;
Header.contextTypes = _types.tableHeaderContextTypes;

exports.default = Header;