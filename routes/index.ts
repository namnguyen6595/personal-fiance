import express, { Router } from 'express'

import { BlogApi } from "./blogs-api/main"
import { CoffeeApi } from "./coffee-api/main"
const appRoutes = Router()
appRoutes.use(express.json())

appRoutes.use("/blog", BlogApi)
appRoutes.use("/coffee", CoffeeApi)

export { appRoutes }