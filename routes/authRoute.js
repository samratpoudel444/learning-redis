const express= require("express");
const createUser = require("../client/controller/registration");
const { showUser } = require("../client/controller/showUserController");


const authRouter= express.Router();

authRouter.route('/register').post(createUser);
authRouter.route('/showUsers').get(showUser);



module.exports= authRouter;