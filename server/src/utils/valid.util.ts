class Valid {
  isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isPassword(pass: string): boolean {
    return pass.length >= 4;
  }
}

export const valid = new Valid();
