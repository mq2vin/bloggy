import express from 'express';
import dotenv from 'dotenv';
import blogsRouter from './routes/blogs.js';
import usersRouter from './routes/users.js';
import connectDB from './config/db.js';
import users from "./routes/users.js"; // On importe notre fonction connectDB

dotenv.config();
connectDB()

const PORT = process.env.PORT;
const app = express();

app.use(express.json())
app.use('/blogs', blogsRouter)
app.use('/users', usersRouter)


// Et on démarre l'application sur le port spécifié dans le .env
app.listen(PORT, () =>
    console.log("App started on port " + PORT)
);
