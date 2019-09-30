'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../../common/helpers');

var _TreeViewNode = require('./TreeViewNode');

var _TreeViewNode2 = _interopRequireDefault(_TreeViewNode);

var _TreeViewExpand = require('./TreeViewExpand');

var _TreeViewExpand2 = _interopRequireDefault(_TreeViewExpand);

var _TreeViewIcon = require('./TreeViewIcon');

var _TreeViewIcon2 = _interopRequireDefault(_TreeViewIcon);

var _TreeViewIndents = require('./TreeViewIndents');

var _TreeViewIndents2 = _interopRequireDefault(_TreeViewIndents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeView = function (_React$Component) {
  _inherits(TreeView, _React$Component);

  function TreeView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TreeView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TreeView.__proto__ || Object.getPrototypeOf(TreeView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focusedNodeId: '',
      expandSiblings: ''
    }, _this.onFocus = function (node) {
      _this.setState(function () {
        return { focusedNodeId: node.dataset.id };
      });
    }, _this.onKeyDown = function (event) {
      var nodes = _this.getVisibleNodes([].concat(_toConsumableArray(_this.treeRef.current.getElementsByTagName('li'))));
      var currentNodePosition = nodes.findIndex(function (element) {
        return element.dataset.id === _this.state.focusedNodeId;
      });

      if (event.key === _helpers.KEYS.ARROW_DOWN && currentNodePosition !== nodes.length - 1) {
        nodes[currentNodePosition + 1].focus();
      } else if (event.key === _helpers.KEYS.ARROW_UP && currentNodePosition !== 0) {
        nodes[currentNodePosition - 1].focus();
      } else if (event.key === _helpers.KEYS.HOME) {
        var _nodes = _slicedToArray(nodes, 1),
            firstNode = _nodes[0];

        firstNode.focus();
      } else if (event.key === _helpers.KEYS.END) {
        var _nodes$slice = nodes.slice(-1),
            _nodes$slice2 = _slicedToArray(_nodes$slice, 1),
            lastVisibleNode = _nodes$slice2[0];

        lastVisibleNode.focus();
      }
    }, _this.onKeyPress = function (event) {
      var nodes = _this.getVisibleNodes([].concat(_toConsumableArray(_this.treeRef.current.getElementsByTagName('li'))));
      var currentNodePosition = nodes.findIndex(function (element) {
        return element.dataset.id === _this.state.focusedNodeId;
      });
      var key = event.key;


      if (/[a-zA-Z]{1}/.test(key) && key.length === 1) {
        var searchableNodes = nodes.slice(currentNodePosition + 1);
        var firstMatchingNode = searchableNodes.find(function (node) {
          var nodeText = node.querySelector('.treeitem-row').textContent;

          var _nodeText = _slicedToArray(nodeText, 1),
              firstLetter = _nodeText[0];

          return firstLetter === key;
        });
        if (firstMatchingNode) {
          firstMatchingNode.focus();
        } else {
          var _nodes2 = _slicedToArray(nodes, 1),
              firstNode = _nodes2[0];

          firstNode.focus();
        }
      }

      if (key === '*') {
        _this.setState(function (prevState) {
          return { expandSiblings: prevState.focusedNodeId };
        });
      }
    }, _this.getVisibleNodes = function (nodes) {
      return nodes.filter(function (node) {
        return !node.className.match(/node-hidden/);
      });
    }, _this.clearExpandSiblings = function () {
      _this.setState(function () {
        return { expandSiblings: '' };
      });
    }, _this.treeRef = _react2.default.createRef(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TreeView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          nodes = _props.nodes,
          selectNode = _props.selectNode,
          highlightOnHover = _props.highlightOnHover,
          highlightOnSelect = _props.highlightOnSelect,
          accessibleName = _props.accessibleName;
      var _state = this.state,
          focusedNodeId = _state.focusedNodeId,
          expandSiblings = _state.expandSiblings;

      var classes = (0, _classnames2.default)('list-group', {
        'treeview-select': highlightOnSelect,
        'treeview-hover': highlightOnHover
      });

      return _react2.default.createElement(
        'div',
        { className: 'treeview' },
        _react2.default.createElement(
          'ul',
          {
            className: classes,
            ref: this.treeRef,
            onKeyDown: this.onKeyDown,
            onKeyPress: this.onKeyPress,
            role: 'tree',
            'aria-label': accessibleName
          },
          nodes && nodes.map(function (node, index) {
            return _react2.default.createElement(_TreeViewNode2.default, {
              node: node,
              key: index,
              index: index,
              nodeId: String(index),
              level: 1,
              selectNode: selectNode,
              onFocus: _this2.onFocus,
              focusedNodeId: focusedNodeId,
              setSize: nodes.length,
              expandSiblings: expandSiblings,
              clearExpandSiblings: _this2.clearExpandSiblings
            });
          })
        )
      );
    }
  }]);

  return TreeView;
}(_react2.default.Component);

TreeView.propTypes = {
  /** Array of node objects */
  nodes: _propTypes2.default.array,
  /** Function that will be triggered when a selectable node is clicked */
  selectNode: _propTypes2.default.func,
  /** Highlight node row on hover */
  highlightOnHover: _propTypes2.default.bool,
  /** Highlight node row when clicked */
  highlightOnSelect: _propTypes2.default.bool,
  /** Identification for assistive devices */
  accessibleName: _propTypes2.default.string
};

TreeView.defaultProps = {
  highlightOnHover: false,
  highlightOnSelect: false,
  nodes: [],
  selectNode: _helpers.noop,
  accessibleName: ''
};

TreeView.Node = _TreeViewNode2.default;
TreeView.Expand = _TreeViewExpand2.default;
TreeView.Icon = _TreeViewIcon2.default;
TreeView.Indents = _TreeViewIndents2.default;

exports.default = TreeView;