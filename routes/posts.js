const express = require('express')
const router = express.Router();
const { v4: uuid } = require('uuid');

const people = [
    {id: "1234", name: "cheryl", age: 405},
    {id: "5678", name: "ken", age: 604},
    {id: "91011", name: "hael", age: 9000}
]

// router => localhost:8000/api/posts/
router.get('/', function(req, res) {

    // return res.status(500).send("Server is Down :(")

    if(!req.query.minAge) {
        return res.status(200).send(people);
    }

    const minAge = Number(req.query.minAge);

    const listOfPeople = [];

    for (let i = 0; i < people.length; i++) {

        const person = people[i];

        if (person.age >= minAge) {
            listOfPeople.push(person);
        }

    }

    res.status(200).send(listOfPeople);
})

router.get('/:firstName', function(req, res) {
    for(let i = 0; i < people.length; i++ ){
        const person = people[i];
        if (person.name === req.params.firstName) {
            return res.status(200).send(person);
        }
    }

    res.status(404).send("No person found with the name " + req.params.firstName)

})

router.post('/', function(req, res) {

    const newPerson = {};
    newPerson.name = req.body.name;
    newPerson['age'] = req.body.age;
    newPerson.id = uuid();

    console.log(newPerson);

    people.push(newPerson);

    res.sendStatus(200);

})

module.exports = router;