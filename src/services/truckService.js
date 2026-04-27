import {getAll, getById, create, update, remove} from '../repositories/truckRepo.js';

export async function getAllTrucks() {
    return getAll();
}

export async function getTruckById(id) {
    const truck = await getById(id);
    if (truck) return truck;
  
    const error = new Error(`Post ${id} not found`);
    error.status = 404;
    throw error;
    
}

export async function createTruck(truckData) {
    return create(truckData);
}

export async function updateTruck(id, updatedData) {
    const updatedTruck = await update(id, updatedData);
    if (updatedTruck) return updatedTruck;
    
    const error = new Error(`Post ${id} not found`);
    error.status = 404;
    throw error;
    
}

export async function deleteTruck(id) {
    const result = await remove(id);
    if (result) return;
    
    const error = new Error(`Post ${id} not found`);
    error.status = 404;
    throw error;
    
}