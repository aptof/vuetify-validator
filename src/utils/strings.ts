import isString from './isString';

export default {
  isEmail(value: any) {
    if (isString(value)) {
      const reg = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
      return reg.test(value.trim());
    } else {
      return true;
    }
  },
  isMinLength(value: any, length: number) {
    if (isString(value)) {
      if (value.trim().length === 0 || value.trim().length >= length) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  },
  hasAnUpper(value: any) {
    if (isString(value)) {
      const reg = /[A-Z]/;
      return value.trim().length === 0 || reg.test(value.trim());
    } else {
      return true;
    }
  },
  hasALower(value: any) {
    if (isString(value)) {
      const reg = /[a-z]/;
      return value.trim().length === 0 || reg.test(value.trim());
    } else {
      return true;
    }
  },
  hasADigit(value: any) {
    if (isString(value)) {
      const reg = /[\d]/;
      return value.trim().length === 0 || reg.test(value.trim());
    } else {
      return true;
    }
  },
  isSame(value: any, match: any): boolean {
    if (isString(value) && isString(match)) {
      return value.trim() === match.trim();
    } else {
      return value === match;
    }
  },
  isAlpha(value: any) {
    if (isString(value)) {
      const reg = /^[a-zA-Z]*$/;
      return value.trim().length === 0 || reg.test(value.trim());
    } else {
      return true;
    }
  },
  isAlphaNumeric(value: any) {
    if (isString(value)) {
      const reg = /^[a-zA-Z0-9]*$/;
      return value.trim().length === 0 || reg.test(value.trim());
    } else {
      return true;
    }
  },
  isNumeric(value: any) {
    if (isString(value)) {
      const reg = /^[0-9]*$/;
      return value.trim().length === 0 || reg.test(value.trim());
    } else {
      return true;
    }
  },
  isLength(value: any, length: number) {
    if (isString(value)) {
      return value.trim().length === 0 || value.trim().length === length;
    } else {
      return true;
    }
  },
  isDecimal(value: any) {
    if (isString(value)) {
      const reg = /^[-]?\d*(\.\d+)?$/;
      return value.trim().length === 0 || reg.test(value.trim());
    } else {
      return true;
    }
  },
};
