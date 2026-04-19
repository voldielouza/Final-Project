import {getAllTrucks, getTruckById} from '../services/truckService.js';

export async function getAllTrucksHandler(req, res) {
    let trucks = await getAllTrucks();
    res.status(200).json(trucks);
}

export async function getTruckByIdHandler(req, res) {
    const id = parseInt(req.params.id);
    const truck = await getTruckById(id);
    res.status(200).json(truck);
}

export async function createTruckHandler(req, res) {
    const {name, price, shippingAddress} = req.body;
    const newTruck = await createTruck({name, price, shippingAddress, userId: req.user.id});
    res.status(201).json(newTruck);
}

export async function updateTruckHandler(req, res){
    const id = parseInt(req.params.id);
    const {name, price, shippingAddress} = req.body;
    const updatedTruck = await updatedTruck(id, {name, price, shippingAddress});
    res.status(200).json(updatedTruck);
}

export async function deleteTruckHandler(req, res) {
  const id = parseInt(req.params.id);
  await deleteTruck(id);
  res.status(204).send();
}