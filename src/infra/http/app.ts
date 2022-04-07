import express, { Router } from "express"
import { EnsureAuthenticatedMiddleware } from "./middlewares/EnsureAuthenticatedMiddleware"

const app = express()

const router = Router()

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
)

router.get("/", EnsureAuthenticatedMiddleware, (req, res) => {
  return res.json({ test: "ok" })
})

app.use(router)

export { app }
