import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

// Authentication middleware
export default function authenticateUser(req: Request, res: Response, next: NextFunction)  {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      
      // Verify the token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      
      // Attach the user ID to the request object
      req.userId = decodedToken.userId;
      
      next();
    } catch (error) {
      console.error('Error authenticating user:', error);
      res.status(401).json({ error: 'Unauthorized' });
    }
  };