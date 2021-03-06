"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Provider = /*#__PURE__*/function () {
  function Provider() {
    _classCallCheck(this, Provider);
  }

  _createClass(Provider, [{
    key: "getElements",
    value: function getElements(_type) {
      throw new Error('Provider.getElements() is not implemented!');
    }
  }, {
    key: "handleAPI",
    value: function handleAPI(_api) {
      throw new Error('Provider.handleAPI() is not implemented!');
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      console.error('Provider.getConfig() is not implemented!');
      return {};
    }
  }]);

  return Provider;
}();

exports.default = Provider;