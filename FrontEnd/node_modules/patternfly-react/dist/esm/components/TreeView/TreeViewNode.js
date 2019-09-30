var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop, KEYS } from '../../common/helpers';
import TreeViewExpand from './TreeViewExpand';
import TreeViewIcon from './TreeViewIcon';
import TreeViewIndents from './TreeViewIndents';

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


      if (node.nodes && focusedNodeId === nodeId && (key === KEYS.ARROW_RIGHT || key === KEYS.ARROW_LEFT)) {
        e.stopPropagation();
        if (key === KEYS.ARROW_RIGHT) {
          _this.setState(function () {
            return { expanded: true };
          });
        } else {
          _this.setState(function () {
            return { expanded: false };
          });
        }
      }

      if (key === KEYS.SPACE || key === KEYS.ENTER) {
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
    }, _this.nodeRef = React.createRef(), _temp), _possibleConstructorReturn(_this, _ret);
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

      var treeitemClasses = classNames('list-group-item', {
        'node-hidden': level > 1 ? !visible : false,
        'node-selected': node.selected
      });
      var treeitemRowClasses = classNames('treeitem-row', {
        focus: focused
      });

      return React.createElement(
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
        React.createElement(
          'span',
          { className: treeitemRowClasses },
          React.createElement(TreeViewIndents, { level: level }),
          React.createElement(TreeViewExpand, { nodes: node.nodes, expanded: expanded, toggleExpand: this.toggleExpand }),
          React.createElement(TreeViewIcon, { icon: node.icon }),
          node.text
        ),
        node.nodes && React.createElement(
          'ul',
          { className: 'list-group', role: 'group' },
          node.nodes.map(function (childNode, idx) {
            return React.createElement(TreeViewNode, {
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
}(Component);

TreeViewNode.propTypes = {
  node: PropTypes.object,
  level: PropTypes.number.isRequired,
  visible: PropTypes.bool,
  selectNode: PropTypes.func,
  index: PropTypes.number.isRequired,
  onFocus: PropTypes.func,
  focusedNodeId: PropTypes.string.isRequired,
  setSize: PropTypes.number.isRequired,
  expandSiblings: PropTypes.string,
  clearExpandSiblings: PropTypes.func,
  nodeId: PropTypes.string
};

TreeViewNode.defaultProps = {
  node: {},
  visible: false,
  selectNode: noop,
  onFocus: noop,
  expandSiblings: '',
  clearExpandSiblings: noop,
  nodeId: ''
};

export default TreeViewNode;