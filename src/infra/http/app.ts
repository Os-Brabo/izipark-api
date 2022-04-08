import "dotenv/config"
import express, { Router } from "express"
import { EnsureAuthenticatedMiddleware } from "./middlewares/EnsureAuthenticatedMiddleware"

const app = express()

const router = Router()

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
)

router.use(EnsureAuthenticatedMiddleware)

router.get("/", (req: any, res: any) => {
  return res.json({ authenticated: req.oidc.isAuthenticated() })
})
router.post("/callback", (req, res) => {
  console.log(req)
  return res.send(200)
})

app.use(router)

export { app }
