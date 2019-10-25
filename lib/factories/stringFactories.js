"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message = require("../utils/errorMessage");
const strings_1 = require("../utils/strings");
require("jest-extended");
exports.emailFactory = (errorMessage = message.emailError()) => {
    return (value) => {
        return strings_1.default.isEmail(value) || errorMessage;
    };
};
exports.minLengthFactory = (length, errorMessage = message.minLengthError(length)) => {
    return (value) => {
        return strings_1.default.isMinLength(value, length) || errorMessage;
    };
};
exports.hasAnUpperFactory = (errorMessage = message.hasAnUpperError()) => {
    return (value) => {
        return strings_1.default.hasAnUpper(value) || errorMessage;
    };
};
exports.hasALowerFactory = (errorMessage = message.hasALowerError()) => {
    return (value) => {
        return strings_1.default.hasALower(value) || errorMessage;
    };
};
exports.hasADigitFactory = (errorMessage = message.hasADigitError()) => {
    return (value) => {
        return strings_1.default.hasADigit(value) || errorMessage;
    };
};
exports.isSameFactory = (match, errorMessage = message.isSameError()) => {
    return (value) => {
        return strings_1.default.isSame(value, match) || errorMessage;
    };
};
exports.isAlphaFactory = (errorMessage = message.isAlphaError()) => {
    return (value) => {
        return strings_1.default.isAlpha(value) || errorMessage;
    };
};
exports.isAlphaNumericFactory = (errorMessage = message.isAlphaNumericError()) => {
    return (value) => {
        return strings_1.default.isAlphaNumeric(value) || errorMessage;
    };
};
exports.isNumericFactory = (errorMessage = message.isNumericError()) => {
    return (value) => {
        return strings_1.default.isNumeric(value) || errorMessage;
    };
};
exports.isLengthFactory = (length, errorMessage = message.isLengthError(length)) => {
    return (value) => {
        return strings_1.default.isLength(value, length) || errorMessage;
    };
};
exports.isDecimalFactory = (errorMessage = message.isDecimalError()) => {
    return (value) => {
        return strings_1.default.isDecimal(value) || errorMessage;
    };
};
