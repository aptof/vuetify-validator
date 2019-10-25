export const emailError = (): string => 'Invalid email';
export const requiredError = (): string => 'Required';
export const minLengthError = (length: number): string => `Minimum length should be ${length}`;
export const hasAnUpperError = (): string => 'Should have an uppercase';
export const hasALowerError = (): string => 'Should have a lowercase';
export const hasADigitError = (): string => 'Should have a digit';
export const isSameError = (): string => 'Does not match';
export const isAlphaError = (): string => 'Should be alphabets';
export const isAlphaNumericError = (): string => 'Should be alpha-numeric';
export const isNumericError = (): string => 'Should be numeric';
export const isLengthError = (length: number): string => `Length should be ${length}`;
export const isDecimalError = (): string => 'Should be decimal';
