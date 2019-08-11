var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { ResizeSensor } from 'css-element-queries';
import { debounce } from '../../common/helpers';

var CardHeightMatching = function (_React$Component) {
  _inherits(CardHeightMatching, _React$Component);

  function CardHeightMatching(props) {
    _classCallCheck(this, CardHeightMatching);

    var _this = _possibleConstructorReturn(this, (CardHeightMatching.__proto__ || Object.getPrototypeOf(CardHeightMatching)).call(this, props));

    _this._selectors = Array.isArray(props.selector) ? props.selector : [props.selector];
    _this._resizeSensors = [];
    return _this;
  }

  _createClass(CardHeightMatching, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // schedule the initial height matching
      this._matchHeights();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      // if the container got updated, let's match heights again
      setTimeout(function () {
        _this2._matchHeights();
      }, 0);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._removeSensors();
    }
  }, {
    key: '_addSensors',
    value: function _addSensors() {
      var _this3 = this;

      // setup the event listening on '_container' for our height matching selectors
      this._selectors.forEach(function (selector) {
        var elements = _this3._container.querySelectorAll(selector);
        _this3._resizeSensors.push(new ResizeSensor(elements, debounce(function () {
          return _this3._matchHeights([selector]);
        }, 200)));
      });
    }
  }, {
    key: '_removeSensors',
    value: function _removeSensors() {
      this._resizeSensors.forEach(function (sensor) {
        sensor.detach();
      });
      this._resizeSensors = [];
    }
  }, {
    key: '_matchHeights',
    value: function _matchHeights() {
      var _this4 = this;

      var selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._selectors;

      if (!this._container) {
        return;
      }

      // Remove any existing sensors so they do not detect changes made here
      this._removeSensors();

      var arrayMap = function arrayMap(elements) {
        return Array.prototype.map.call(elements, function (el) {
          return el.scrollHeight;
        }).reduce(function (pre, cur) {
          return Math.max(pre, cur);
        }, -Infinity);
      };
      selectors.forEach(function (selector) {
        var elements = _this4._container.querySelectorAll(selector);
        elements.forEach(function (el) {
          el.style.height = null;
        });
        var maxHeight = arrayMap(elements);
        elements.forEach(function (el) {
          el.style.height = maxHeight + 'px';
        });
      });

      // Add resize sensors to watch for resizes
      this._addSensors();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return React.createElement(
        'div',
        {
          className: this.props.className,
          ref: function ref(node) {
            _this5._container = node;
          }
        },
        this.props.children
      );
    }
  }]);

  return CardHeightMatching;
}(React.Component);

CardHeightMatching.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  selector: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired
};
CardHeightMatching.defaultProps = {
  className: ''
};
export default CardHeightMatching;