import {getAllUsers} from '../services/userService.js';

export async function getAllUsersHandler(req, res) {
    const users = getAllUsers();
    res.status(200).json(users);
}

