import { AuthSchema, authSchema } from "../services/validate.service";

export const validateCredentials = (credentials: AuthSchema) => {
    const result = authSchema.safeParse(credentials);
  
    if (!result.success) {
      // Handle errors
        return {message:result.error.errors.map((err) => err.message),success:false};
    }
  
    // Credentials are valid
    return {message:"Credentials are valid!",success:true};
  };