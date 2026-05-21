import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { PrismaClient } from './prisma/generated/prisma/client.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})