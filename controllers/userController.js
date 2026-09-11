import User from '../models/user.js';
import Blog from "../models/blog.js";

const champs_filtrable = ['name', 'createdAt']

function getSortDirection(order) {
    return order === 'desc' ? -1 : 1
}

async function getAllUsers(req, res) {
    try {
        console.log("Getting all Users")
        const { sort, order } = req.query
        let query = User.find({}, { name: 1, mail: 1, createdAt: 1 });
        if (champs_filtrable.includes(sort)) {
            query = query.sort({ [sort]: getSortDirection(order) })
        }
        const users = await query;
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function getComment(req, res) {
    try {
        console.log("Getting comment by id " + req.params.id);
        const comments = await Blog.find(
            { "comments.user": req.params.id },
            { comments: { $elemMatch: { user: req.params.id } } },
            { _id: 0, comments: 1 }
        );
        console.log(comments)
        res.send(comments);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function createUser(req, res) {
    try{
        console.log("Create a user")
        const user = await User.create({
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
    updateUser,
    getComment
}