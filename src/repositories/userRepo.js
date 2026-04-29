import prisma from '../config/db.js';

export async function createUser(data) {
    try {
    const newUser = await prisma.user.create({
      data,
      omit: { password: true },
    });
    return newUser;
  } catch (error) {
    if (error.code === 'P2002') {
      const err = new Error('Email has already been used');
      err.status = 409;
      throw err;
    }
    throw error;
  }
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