import { auth } from "express-oauth2-jwt-bearer"

export const EnsureAuthenticatedMiddleware = auth({
  secret: process.env.SECRET,
  audience: "undefined",
  issuerBaseURL: "http://localhost:3333",
})
