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