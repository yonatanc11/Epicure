import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import { chefsRouter } from './routes/chefs.routes'
import { restaurantsRouter } from './routes/restaurants.routes'
import { dishesRouter } from './routes/dishes.routes'

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT) || 3000

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/chefs', chefsRouter)
app.use('/api/restaurants', restaurantsRouter)
app.use('/api/dishes', dishesRouter)

async function start() {
  await connectDB()
  app.listen(PORT, () => {
    console.log(`[epicure-api] listening on http://localhost:${PORT}`)
  })
}

start().catch((err) => {
  console.error('[epicure-api] failed to start', err)
  process.exit(1)
})
