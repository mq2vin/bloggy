import express from 'express';
import dotenv from 'dotenv';
import blogsRouter from './routes/blogs.js';
import connectDB from './config/db.js'; // On importe notre fonction connectDB

dotenv.config();
connectDB()

const PORT = process.env.PORT;
const app = express();

app.use(express.json())
app.use('/blogs', blogsRouter)




// Et on démarre l'application sur le port spécifié dans le .env
app.listen(PORT, () =>
    console.log("App started on port " + PORT)
);
