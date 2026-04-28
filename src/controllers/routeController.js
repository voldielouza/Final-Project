import {getAllRoutes, getRouteById, deleteRoute, createRoute, updateRoute} from '../services/routeService.js';

export async function getAllRoutesHandler(req, res) {
    let routes = await getAllRoutes();
    res.status(200).json(routes);
}

export async function getRouteByIdHandler(req, res) {
    const id = parseInt(req.params.id);
    const route = await getRouteById(id);
    res.status(200).json(route);
}

export async function createRouteHandler(req, res, next) {
    try {
        const {name, street} = req.body;
        const newRoute = await createRoute({name, street, userId: req.user.id});
        res.status(201).json(newRoute);
    }
    catch (error) {
        next(error);
    }
}

export async function updateRouteHandler(req, res){
    const id = parseInt(req.params.id);
    const {name, street} = req.body;
    const updatedRoute = await updateRoute(id, {name, street});
    res.status(200).json(updatedRoute);
}

export async function deleteRouteHandler(req, res) {
  const id = parseInt(req.params.id);
  await deleteRoute(id);
  res.status(204).send();
}