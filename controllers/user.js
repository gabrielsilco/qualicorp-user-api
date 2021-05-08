const User = require('../models/user');

exports.createUser = (req, res, next) => {
    const fullName = req.body.fullName;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const phone = req.body.phone;
    const birthDate = req.body.birthDate;

    const user = new User({fullName, cpf, email, phone, birthDate});
    user.save()
        .then(createdUser => {
            res.status(201).json({
                message: 'User created!',
                user: createdUser
            })
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getAllUsers = (req, res, next) => {
    User.find()
        .then(users => {
            res.status(200).json({
                message: 'Fetched all users',
                users: users
            })
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getUserById = (req, res, next) => {
    const userId = req.params.userId;
    User.findById(userId)
        .then(user => {
            res.status(200).json({
                message: 'User fetched',
                user: user
            })
        })
        .catch(error => {
            console.log(error)
        })
}

exports.updateUser = (req, res, next) => {
    const userId = req.params.userId
    const fullName = req.body.fullName;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const phone = req.body.phone;
    const birthDate = req.body.birthDate;

    User.findById(userId)
        .then(user => {
            user.fullName = fullName;
            user.cpf = cpf;
            user.email = email;
            user.phone = phone;
            user.birthDate = birthDate;
            return user.save();
        })
        .then(editedUser => {
            res.status(200).json({
                message: 'User updated',
                user: editedUser
            })
        })
        .catch(error => {
            console.log(error)
        })
}

exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;
    User.findByIdAndRemove(userId)
        .then(removedUser => {
            res.status(200).json({
                message: 'User deleted',
                user: removedUser
            })
        })
        .catch(error => {
            console.log(error)
        })
}