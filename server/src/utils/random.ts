class Random {
  readonly letters = "abcdefghijklmnopqrstuvwxyz";
  readonly numbers = "0123456789";
  readonly specialCharacters = "!@#$%^&*()-_=+{}[]:;'";

  generateString(length = 20): string {
    let result = "";
    const characters = this.letters + this.numbers + this.specialCharacters;

    for (let i = 0; i < length; i++) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }

    return result;
  }

  id(): string {
    return this.generateString(25);
  }
}

/**
 * @instance
 * a util class instance to generate random stuff
 */
export const random = new Random();
