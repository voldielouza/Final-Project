import {getAll, getById} from '../repositories/routeRepo.js';

export async function getAllRoutes() {
    return getAll();
}

export async function getRouteById(id) {
    const route = await getById(id);
    if (route) return route;
    else {
        const error = new Error(`Post ${id} not found`);
        error.status = 404;
        throw error;
    }
}

export async function createRoute(routeData) {
    return create(routeData);
}

export async function updateRoute(id, updatedData) {
    const updatedRoute = await update(id, updatedData);
    if (updatedRoute) return updatedRoute;
    else {
        const error = new Error(`Post ${id} not found`);
        error.status = 404;
        throw error;
    }
}

export async function deleteRoute(id) {
    const result = await remove(id);
    if (result) return;
    else {
        const error = new Error(`Post ${id} not found`);
        error.status = 404;
        throw error;
    }
}