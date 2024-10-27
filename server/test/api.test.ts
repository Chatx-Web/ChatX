import request from "supertest"
import {app} from "../src/app"



describe("POST regiter",() => {
  it("Should Validate The Credentials Ans Return AcessToken",async () => {
    const res = await request(app)
    .post("/api/v1/auth/register")
    .send({username:"hitbheda12",email:"this123@mail.com",password:"this@123"})

    expect(res.status).toBe(500)
    expect(res.body.message).toStrictEqual("Password must contain at least one uppercase letter")
  })
})

describe("POST regiter",() => {
  it("Should Validate The Credentials Ans Return AcessToken",async () => {
    const res = await request(app)
    .post("/api/v1/auth/register")
    .send({username:"hitbheda1233",email:"this12313@mail.com",password:"This@123"})

    expect(res.status).toBe(500)
    expect(res.body.message).toBe("fgdskfkndfkn")
  })
})