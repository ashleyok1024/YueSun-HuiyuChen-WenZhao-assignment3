const express = require('express');
const router = express.Router();

const UserModel = require('../model/user.model');


router.post('/', (req, res) => {

    console.log("post: " + JSON.stringify(req.body));
    if(!req.body.username || !req.body.password) {
        return res.status(404).send({message: "Must include username AND password"});
    }

    return UserModel.addUser(req.body)
        .then((success) => res.status(200).send(success),
            (error) => res.status(500).send(error));
});

router.post('/authenticate', function (req, res) {
    UserModel.getUseByUserName(req.body.username)
        .then((user) => {
            if (user.password === req.body.password) {
                res.status(200).send(user);
            } else {
                res.status(404).send('Failed to authenticate user!');
            }
        })
});

router.get('/', (req, res) => {
    console.log("get1");
    UserModel.getAllUsers()
    .then(users => res.send(users))

});


module.exports = router;