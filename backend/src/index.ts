import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import router from './routes/router';

dotenv.config();
const app = express();

// Use cors middleware
app.use(cors({
  origin: process.env.CROSS_ORIGIN, // React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(express.json());

// add routes
app.use(router)

mongoose
  .connect(process.env.DB_URL as string)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log('Server started on port 3001');
    });
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB:', err);
  });