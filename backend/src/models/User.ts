import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt'

interface IUser {
    name: string;
    email: string;
    password: string;
    role: string, enum: ['user', 'admin'];
    createdAt: string
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
}, { collection: 'users' });

userSchema.methods.comparePassword = async function (candidatePassword: string) {
    return bcrypt.compare(candidatePassword, this.password);
  };

export default mongoose.model<IUser>('User', userSchema);