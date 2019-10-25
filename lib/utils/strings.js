"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isString_1 = require("./isString");
exports.default = {
    isEmail(value) {
        if (isString_1.default(value)) {
            const reg = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
            return reg.test(value.trim());
        }
        else
            return true;
    },
    isMinLength(value, length) {
        if (isString_1.default(value)) {
            if (value.trim().length == 0 || value.trim().length >= length) {
                return true;
            }
            else
                return false;
        }
        else
            return true;
    },
    hasAnUpper(value) {
        if (isString_1.default(value)) {
            const reg = /[A-Z]/;
            return value.trim().length == 0 || reg.test(value.trim());
        }
        else
            return true;
    },
    hasALower(value) {
        if (isString_1.default(value)) {
            const reg = /[a-z]/;
            return value.trim().length == 0 || reg.test(value.trim());
        }
        else
            return true;
    },
    hasADigit(value) {
        if (isString_1.default(value)) {
            const reg = /[\d]/;
            return value.trim().length == 0 || reg.test(value.trim());
        }
        else
            return true;
    },
    isSame(value, match) {
        if (isString_1.default(value) && isString_1.default(match)) {
            return value.trim() === match.trim();
        }
        else
            return value === match;
    },
    isAlpha(value) {
        if (isString_1.default(value)) {
            const reg = /^[a-zA-Z]*$/;
            return value.trim().length == 0 || reg.test(value.trim());
        }
        else
            return true;
    },
    isAlphaNumeric(value) {
        if (isString_1.default(value)) {
            const reg = /^[a-zA-Z0-9]*$/;
            return value.trim().length == 0 || reg.test(value.trim());
        }
        else
            return true;
    },
    isNumeric(value) {
        if (isString_1.default(value)) {
            const reg = /^[0-9]*$/;
            return value.trim().length == 0 || reg.test(value.trim());
        }
        else
            return true;
    },
    isLength(value, length) {
        if (isString_1.default(value)) {
            return value.trim().length == 0 || value.trim().length == length;
        }
        else
            return true;
    },
    isDecimal(value) {
        if (isString_1.default(value)) {
            const reg = /^[-]?\d*(\.\d+)?$/;
            return value.trim().length == 0 || reg.test(value.trim());
        }
        else
            return true;
    },
};
