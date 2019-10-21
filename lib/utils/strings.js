"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isString = _interopRequireDefault(require("./isString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  isEmail(value) {
    if ((0, _isString.default)(value)) {
      const reg = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
      return reg.test(value.trim());
    } else return true;
  },

  isMinLength(value, length) {
    if ((0, _isString.default)(value)) {
      if (value.trim().length == 0 || value.trim().length >= length) {
        return true;
      } else return false;
    } else return true;
  },

  hasAnUpper(value) {
    if ((0, _isString.default)(value)) {
      const reg = /[A-Z]/;
      return value.trim().length == 0 || reg.test(value.trim());
    } else return true;
  },

  hasALower(value) {
    if ((0, _isString.default)(value)) {
      const reg = /[a-z]/;
      return value.trim().length == 0 || reg.test(value.trim());
    } else return true;
  },

  hasADigit(value) {
    if ((0, _isString.default)(value)) {
      const reg = /[\d]/;
      return value.trim().length == 0 || reg.test(value.trim());
    } else return true;
  },

  isSame(value, match) {
    if ((0, _isString.default)(value) && (0, _isString.default)(match)) {
      return value.trim() === match.trim();
    } else return value === match;
  },

  isAlpha(value) {
    if ((0, _isString.default)(value)) {
      const reg = /^[a-zA-Z]*$/;
      return value.trim().length == 0 || reg.test(value.trim());
    } else return true;
  },

  isAlphaNumeric(value) {
    if ((0, _isString.default)(value)) {
      const reg = /^[a-zA-Z0-9]*$/;
      return value.trim().length == 0 || reg.test(value.trim());
    } else return true;
  },

  isNumeric(value) {
    if ((0, _isString.default)(value)) {
      const reg = /^[0-9]*$/;
      return value.trim().length == 0 || reg.test(value.trim());
    } else return true;
  },

  isLength(value, length) {
    if ((0, _isString.default)(value)) {
      return value.trim().length == 0 || value.trim().length == length;
    } else return true;
  },

  isDecimal(value) {
    if ((0, _isString.default)(value)) {
      const reg = /^[-]?\d*(\.\d+)?$/;
      return value.trim().length == 0 || reg.test(value.trim());
    } else return true;
  }

};
exports.default = _default;