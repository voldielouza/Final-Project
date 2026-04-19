import prisma from '../config/db.js';

export async function getAll() {
    const trucks = await prisma.truck.findMany();
    return trucks;
}

export async function getById(id) {
    const truck = await prisma.truck.findUnique({where: {id}});
    return truck;
}

export async function create(truckData) {
    const newTruck = prisma.truck.create({data: truckData});
    return newTruck;
}

export async function update(id, updatedData) {
    try {
    const updatedTruck = await prisma.truck.update({
      where: { id },
      data: updatedData,
    });
    return updatedTruck;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function remove(id) {
    try {
    const deletedTruck = await prisma.truck.delete({
      where: { id },
    });
    return deletedTruck;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

