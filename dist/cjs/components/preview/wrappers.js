"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultWrappers = exports.ApplyWrappers = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("./utils/components");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ApplyWrappers = function ApplyWrappers(_ref) {
  var wrappers = _ref.wrappers,
      id = _ref.id,
      storyId = _ref.storyId,
      active = _ref.active,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, wrappers.reduceRight(function (acc, wrapper, index) {
    return wrapper.render({
      index: index,
      children: acc,
      id: id,
      storyId: storyId,
      active: active
    });
  }, children));
};

exports.ApplyWrappers = ApplyWrappers;
ApplyWrappers.displayName = "ApplyWrappers";
var defaultWrappers = [{
  render: function render(p) {
    return /*#__PURE__*/_react.default.createElement(_components.IframeWrapper, {
      id: "storybook-preview-wrapper",
      hidden: !p.active
    }, p.children);
  }
}];
exports.defaultWrappers = defaultWrappers;