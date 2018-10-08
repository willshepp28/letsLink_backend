/*
|--------------------------------------------------------------------------
|  Dependencies
|--------------------------------------------------------------------------
*/
const router = require("express").Router(),
    knex = require("../db/knex");





router.get("/", (request, response) => {
    
    knex("users")
        .then(users => {
            response.status(200).json(users)
        })
        .catch(error => {
            response.status(400).json(error);
        });
});


router.post("/login", (request, response) => {
    response.json({
        message: "You are on the login page"
    });
});


router.post("/signup", (request, response) => {
    response.json({
        message: "You are on the signup page"
    });
});








module.exports = router;