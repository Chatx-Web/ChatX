class Valid {
  isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isPassword(pass: string): boolean {
    return pass.length >= 4;
  }
}

/**
 * @instance
 * a util class instance to validate data types and complex stuff
 */
export const valid = new Valid();
