import express from 'express';
import dotenv from 'dotenv';
import blogsRouter from './routes/blogs.js';
import usersRouter from './routes/users.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB()

const PORT = process.env.PORT;
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("Coucou")
})

app.use('/blogs', blogsRouter)
app.use('/users', usersRouter)


// Et on démarre l'application sur le port spécifié dans le .env
app.listen(PORT, () =>
    console.log("App started on port " + PORT)
);
