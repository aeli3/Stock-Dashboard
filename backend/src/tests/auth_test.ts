import mongoose from 'mongoose';
import request from 'supertest';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../index'; 
import User from '../models/User'; 

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
    // Start in-memory MongoDB instance
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

test('Should register a new user and hash the password', async () => {
    const response = await request(app)
      .post('/register')
      .send({ email: 'test@example.com', password: 'password123' });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User registered successfully');

    // Verify password is hashed
    const user = await User.findOne({ email: 'test@example.com' });
    expect(user).toBeTruthy();
    const isPasswordMatch = await bcrypt.compare('password123', user?.password || '');
    expect(isPasswordMatch).toBe(true);
});

test('Should reject login with incorrect password', async () => {
    const password = 'password123';
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a user in the database
    await User.create({ email: 'test@example.com', password: hashedPassword });

    const response = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: 'wrongpassword' });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Invalid email or password');
});

test('Should protect a route using authentication middleware', async () => {
    const password = 'password123';
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a user and generate a token
    const user = await User.create({ email: 'test@example.com', password: hashedPassword });
    const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });

    const response = await request(app)
      .get('/protected')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(`Welcome, user ${user._id}`);
});
