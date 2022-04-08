import { auth } from "express-openid-connect"

export const EnsureAuthenticatedMiddleware = auth({
  secret: process.env.SECRET,
  authRequired: false,
  auth0Logout: true,
  baseURL: "http://localhost:3333",
  clientID: "AtKD5Bvnqeb4ZeIb6gvM49T69niLOBxs",
  issuerBaseURL: "https://dev-7hcexcaf.us.auth0.com",
})
