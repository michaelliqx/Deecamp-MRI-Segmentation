'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../../common/helpers');

var _TreeViewExpand = require('./TreeViewExpand');

var _TreeViewExpand2 = _interopRequireDefault(_TreeViewExpand);

var _TreeViewIcon = require('./TreeViewIcon');

var _TreeViewIcon2 = _interopRequireDefault(_TreeViewIcon);

var _TreeViewIndents = require('./TreeViewIndents');

var _TreeViewIndents2 = _interopRequireDefault(_TreeViewIndents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeViewNode = function (_Component) {
  _inherits(TreeViewNode, _Component);

  function TreeViewNode() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TreeViewNode);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TreeViewNode.__proto__ || Object.getPrototypeOf(TreeViewNode)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: _this.props.node.hasOwnProperty('state') && _this.props.node.state.expanded || false,
      focused: false,
      tabIndex: -1,
      nodeId: _this.props.nodeId
    }, _this.onKeyDown = function (e) {
      var nodeId = _this.state.nodeId;
      var _this$props = _this.props,
          node = _this$props.node,
          focusedNodeId = _this$props.focusedNodeId;
      var key = e.key;


      if (node.nodes && focusedNodeId === nodeId && (key === _helpers.KEYS.ARROW_RIGHT || key === _helpers.KEYS.ARROW_LEFT)) {
        e.stopPropagation();
        if (key === _helpers.KEYS.ARROW_RIGHT) {
          _this.setState(function () {
            return { expanded: true };
          });
        } else {
          _this.setState(function () {
            return { expanded: false };
          });
        }
      }

      if (key === _helpers.KEYS.SPACE || key === _helpers.KEYS.ENTER) {
        e.stopPropagation();
        _this.handleSelect(e);
      }
    }, _this.onFocus = function (e) {
      e.stopPropagation();
      _this.props.onFocus(_this.nodeRef.current);
      _this.setState(function () {
        return { focused: true };
      });
    }, _this.onBlur = function () {
      _this.setState(function () {
        return { focused: false };
      });
    }, _this.handleSelect = function (e) {
      var _this$props2 = _this.props,
          node = _this$props2.node,
          selectNode = _this$props2.selectNode;


      e.stopPropagation();

      if (node.selectable) {
        _this.nodeRef.current.focus();
        selectNode(node);
      }
    }, _this.toggleExpand = function (e) {
      e.stopPropagation();
      _this.toggleExpandedState();
    }, _this.toggleExpandedState = function () {
      _this.setState(function (prevState) {
        return { expanded: !prevState.expanded };
      });
    }, _this.nodeRef = _react2.default.createRef(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TreeViewNode, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          node = _props.node,
          level = _props.level,
          visible = _props.visible,
          selectNode = _props.selectNode,
          index = _props.index,
          onFocus = _props.onFocus,
          focusedNodeId = _props.focusedNodeId,
          setSize = _props.setSize,
          expandSiblings = _props.expandSiblings,
          clearExpandSiblings = _props.clearExpandSiblings;
      var _state = this.state,
          expanded = _state.expanded,
          focused = _state.focused,
          tabIndex = _state.tabIndex,
          nodeId = _state.nodeId;

      var treeitemClasses = (0, _classnames2.default)('list-group-item', {
        'node-hidden': level > 1 ? !visible : false,
        'node-selected': node.selected
      });
      var treeitemRowClasses = (0, _classnames2.default)('treeitem-row', {
        focus: focused
      });

      return _react2.default.createElement(
        'li',
        {
          className: treeitemClasses,
          onClick: this.handleSelect,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onKeyDown: this.onKeyDown,
          ref: this.nodeRef,
          tabIndex: tabIndex,
          'data-id': nodeId,
          role: 'treeitem',
          'aria-expanded': node.nodes && expanded,
          'aria-level': level,
          'aria-posinset': index + 1,
          'aria-setsize': setSize
        },
        _react2.default.createElement(
          'span',
          { className: treeitemRowClasses },
          _react2.default.createElement(_TreeViewIndents2.default, { level: level }),
          _react2.default.createElement(_TreeViewExpand2.default, { nodes: node.nodes, expanded: expanded, toggleExpand: this.toggleExpand }),
          _react2.default.createElement(_TreeViewIcon2.default, { icon: node.icon }),
          node.text
        ),
        node.nodes && _react2.default.createElement(
          'ul',
          { className: 'list-group', role: 'group' },
          node.nodes.map(function (childNode, idx) {
            return _react2.default.createElement(TreeViewNode, {
              node: childNode,
              key: idx,
              index: idx,
              level: level + 1,
              visible: expanded,
              selectNode: selectNode,
              onFocus: onFocus,
              focusedNodeId: focusedNodeId,
              setSize: node.nodes.length,
              expandSiblings: expandSiblings,
              clearExpandSiblings: clearExpandSiblings,
              nodeId: nodeId + '-' + idx
            });
          })
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      // Collapse the current node if any of its parents is collapsed. This should
      // only fire for nodes that are level 2 or greater
      if (!nextProps.visible && nextProps.level > 1) {
        return { expanded: false };
      }

      // Roving tab index
      // When a treeview is first rendered and not interacted with, the first
      // node should have a tabindex of 0, while the rest of the nodes have a
      // tabindex of -1. Subsequently, the tabindex "roves" to whatever node has
      // gained focus
      var tabIndex = nextProps.focusedNodeId === prevState.nodeId || !nextProps.focusedNodeId && prevState.nodeId === '0' ? 0 : -1;

      if (tabIndex !== prevState.tabIndex) {
        return { tabIndex: tabIndex };
      }

      // * keyboard action
      if (nextProps.expandSiblings) {
        var siblingsLevel = nextProps.expandSiblings.split('-').length;
        if (parseInt(siblingsLevel, 10) === nextProps.level) {
          nextProps.clearExpandSiblings();
          return { expanded: true };
        }
      }

      return null;
    }

    // A node can be set to be expanded by default

  }]);

  return TreeViewNode;
}(_react.Component);

TreeViewNode.propTypes = {
  node: _propTypes2.default.object,
  level: _propTypes2.default.number.isRequired,
  visible: _propTypes2.default.bool,
  selectNode: _propTypes2.default.func,
  index: _propTypes2.default.number.isRequired,
  onFocus: _propTypes2.default.func,
  focusedNodeId: _propTypes2.default.string.isRequired,
  setSize: _propTypes2.default.number.isRequired,
  expandSiblings: _propTypes2.default.string,
  clearExpandSiblings: _propTypes2.default.func,
  nodeId: _propTypes2.default.string
};

TreeViewNode.defaultProps = {
  node: {},
  visible: false,
  selectNode: _helpers.noop,
  onFocus: _helpers.noop,
  expandSiblings: '',
  clearExpandSiblings: _helpers.noop,
  nodeId: ''
};

exports.default = TreeViewNode;