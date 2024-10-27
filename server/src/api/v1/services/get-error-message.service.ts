export const getErrorMessage = (errors: string[]): string => {
    return errors
      .filter(Boolean)  // Remove any null/undefined/empty values
      .join(". ")
      .replace(/^,\s*/, '')  // Remove leading comma and space
      .trim();
  };