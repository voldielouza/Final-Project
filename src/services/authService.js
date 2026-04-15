import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {createUser, findUserByEmail} from '../repositories/userRepo.js';


export async function signUp(name, address, email, password) {
    const hasedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({name, address, email, password: hashedPassword});
    return newUser;
}

export async function logIn(email, password) {
    const error = new Error('Invalid credentials');
    error.status = 401;
    const user = await findUserByEmail(email);
    if (!user) throw error;

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw error;

    const accessToken = jwt.sign({id: user.id, role:user.role}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN,});
    return accessToken;
}