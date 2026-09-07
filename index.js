import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/blogs.js';
import connectDB from './config/db.js'; // On importe notre fonction connectDB

dotenv.config();
connectDB()

const PORT = process.env.PORT;
const app = express();

app.use(express.json())
app.use('', routes)


// Et on démarre l'application sur le port spécifié dans le .env
app.listen(PORT, () =>
    console.log("App started on port " + PORT)
);
