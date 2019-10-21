"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requiredFactory = void 0;

var _errorMessage = require("../utils/errorMessage");

const requiredFactory = (errorMessage = (0, _errorMessage.requiredError)()) => {
  return value => {
    if (value === undefined || value === null) {
      return errorMessage;
    } else if (typeof value === 'string') {
      return value.trim().length > 0 || errorMessage;
    }

    return true;
  };
};

exports.requiredFactory = requiredFactory;