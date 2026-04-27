import {getAllTrucks, getTruckById, createTruck, updateTruck, deleteTruck} from '../services/truckService.js';

export async function getAllTrucksHandler(req, res, next) {
    try {
        const trucks = await getAllTrucks();
        res.status(200).json(trucks);
    } catch (error) {
        next(error);
    }
}
export async function getTruckByIdHandler(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const truck = await getTruckById(id);
        if (!truck) {
            return res.status(404).json({ message: 'Truck not found' });
        }
        res.status(200).json(truck);
    } catch (error) {
        next(error);
    }
}
export async function createTruckHandler(req, res, next) {
    try {
        const {name, licenseNumber} = req.body;
        const newTruck = await createTruck({name, licenseNumber, userId: req.user.id});
        res.status(201).json(newTruck);
    } catch (error) {
        next(error);
    }
    
}

export async function updateTruckHandler(req, res, next){
    try {
        const id = parseInt(req.params.id);
        const {name, licenseNumber} = req.body;
        const updatedTruck = await updatedTruck(id, {name, licenseNumber});
        res.status(200).json(updatedTruck);
    } catch (error) {
        next(error);
    }
    
}

export async function deleteTruckHandler(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        await deleteTruck(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}