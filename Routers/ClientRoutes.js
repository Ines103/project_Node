const express = require('express');
const { GetClient } = require('../ClientControllers/GetClient');
const { GetClientById } = require('../ClientControllers/GetClientById');
const { UpdateClient } = require('../ClientControllers/UpdateClient');
const { AddClient, DeleteClient } = require('../Controllers');



const router = express.Router();

router.get("/clients", GetClient)
router.post("/client" , AddClient)
router.get("/client/:id" , GetClientById)
router.put("/clientt/:id" , UpdateClient)
router.delete("/clients/:id" , DeleteClient)




module.exports = router;