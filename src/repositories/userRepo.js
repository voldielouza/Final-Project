import prisma from '../config/db.js';

export async function createUser(data) {
    const newUser = await prisma.user.create({data, omit: {password: true}});
    return newUser;
    //try catch loop maybe?
}

export async function findUserByEmail(email) {
    return prisma.user.findUnique({where: {email}});
}

export async function findAllUsers() {
    return prisma.user.findMany({omit: {password: true}});
}

export async function updateUser(id, data) {
    return prisma.user.update({where: {id}, data});
}
 
export async function deleteRole(id, role) {
    return prisma.user.update({where: {id}, data: {role}});
}