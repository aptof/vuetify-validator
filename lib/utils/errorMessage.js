"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDecimalError = exports.isLengthError = exports.isNumericError = exports.isAlphaNumericError = exports.isAlphaError = exports.isSameError = exports.hasADigitError = exports.hasALowerError = exports.hasAnUpperError = exports.minLengthError = exports.requiredError = exports.emailError = void 0;

const emailError = () => 'Invalid email';

exports.emailError = emailError;

const requiredError = () => 'Required';

exports.requiredError = requiredError;

const minLengthError = length => `Minimum length should be ${length}`;

exports.minLengthError = minLengthError;

const hasAnUpperError = () => 'Should have an uppercase';

exports.hasAnUpperError = hasAnUpperError;

const hasALowerError = () => 'Should have a lowercase';

exports.hasALowerError = hasALowerError;

const hasADigitError = () => 'Should have a digit';

exports.hasADigitError = hasADigitError;

const isSameError = () => 'Does not match';

exports.isSameError = isSameError;

const isAlphaError = () => 'Should be alphabets';

exports.isAlphaError = isAlphaError;

const isAlphaNumericError = () => 'Should be alpha-numeric';

exports.isAlphaNumericError = isAlphaNumericError;

const isNumericError = () => 'Should be numeric';

exports.isNumericError = isNumericError;

const isLengthError = length => `Length should be ${length}`;

exports.isLengthError = isLengthError;

const isDecimalError = () => 'Should be decimal';

exports.isDecimalError = isDecimalError;