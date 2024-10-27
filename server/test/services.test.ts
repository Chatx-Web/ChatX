import { validateCredentials } from "../src/api/v1/utils/validate.util";


test("Validate Credentials",() => {
    expect(validateCredentials({username:"hitbheda",email:"this1@mail.com",password:"This@123"})).toStrictEqual({message:"Credentials are valid!",success:true})
  })
  
  test("Validate Credentials",() => {
    expect(validateCredentials({username:"hitbheda",email:"this1@mail.com",password:"This@123"})).toStrictEqual({message:"Credentials are valid!",success:true})
  })