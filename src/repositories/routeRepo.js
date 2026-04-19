import prisma from '../config/db.js';

export async function getAll() {
    const routes = await prisma.route.findMany();
    return routes;
}

export async function getById(id) {
    const route = await prisma.route.findUnique({where: {id}});
    return route;
}

export async function create(routeData) {
    const newRoute = prisma.route.create({data: routeData});
    return newRoute;
}

export async function update(id, updatedData) {
    try {
    const updatedRoute = await prisma.route.update({
      where: { id },
      data: updatedData,
    });
    return updatedRoute;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function remove(id) {
    try {
    const deletedRoute = await prisma.route.delete({
      where: { id },
    });
    return deletedRoute;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

