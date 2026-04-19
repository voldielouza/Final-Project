import prisma from '../config/db.js';

export async function getAll() {
    const orders = await prisma.order.findMany();
    return orders;
}

