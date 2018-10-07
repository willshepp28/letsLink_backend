/*
|--------------------------------------------------------------------------
|  Dependencies
|--------------------------------------------------------------------------
*/
const router = require("express").Router(),
    knex = require("../db/knex");





router.get("/", (request, response) => {
    response.json({
        message: "You are on the home page"
    });
});





module.exports = router;