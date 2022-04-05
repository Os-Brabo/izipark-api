import express, { Router } from "express"

const app = express()

const router = Router()

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
)

app.use(router)

export { app }
