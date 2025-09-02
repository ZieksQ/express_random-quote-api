import express from "express";
import quotesRouter from "./src/routes/quotes.js" 

const app = express()
const PORT = 5000

// Middleware
app.use(express.json())

// Routes
app.use('/quotes', quotesRouter)

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})