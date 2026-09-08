import User from '../models/user.js';

async function getAllUsers(req, res) {
    try {
        console.log("Getting all Users");
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function createUser(req, res) {
    try{
        console.log("Create a user")
        const user = await User.insertOne({
            name: req.body.name,
            mail: req.body.mail,
            createdAt: Date.now()
        })
        console.log(user)
        res.send(user)
    } catch (err) {
        res.status(500).send(err);
    }
}

async function updateUser(req, res) {
    try {
        console.log("updating a user");
        const user = await User.updateOne({_id: req.body.id}, {
            name: req.body.name,
            mail: req.body.mail,
            updatedAt: Date.now(),
        });
        console.log(user)
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function deleteUser(req, res) {
    try {
        console.log("delete a user");
        const user = await User.deleteOne({_id: req.body.id});
        console.log(user)
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
}


export default {
    getAllUsers,
    createUser,
    deleteUser,
    updateUser
}