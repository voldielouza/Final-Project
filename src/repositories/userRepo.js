import prisma from '../config/db.js';

export async function createUser(data) {
    const newUser = await prisma.user.create({data, omit: {password: true}});
    return newUser;
    //try catch loop maybe?
}

export async function findUserByEmail(email) {
    return prisma.user.findUnique({where: {email}});
}