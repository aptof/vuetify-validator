import { requiredError } from '../utils/errorMessage';
export const requiredFactory = (errorMessage = requiredError()) => {
  return (value:any):any => {
    if (value === undefined || value === null) {
      return errorMessage;
    } else if (typeof value === 'string') {
      return value.trim().length > 0 || errorMessage;
    }
    return true;
  };
};
