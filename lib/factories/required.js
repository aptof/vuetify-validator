"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMessage_1 = require("../utils/errorMessage");
exports.requiredFactory = (errorMessage = errorMessage_1.requiredError()) => {
    return (value) => {
        if (value === undefined || value === null) {
            return errorMessage;
        }
        else if (typeof value === 'string') {
            return value.trim().length > 0 || errorMessage;
        }
        return true;
    };
};
