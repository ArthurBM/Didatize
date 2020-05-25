const express = require('express');

const router = express.Router();

const User = require('../models/User');

//List
router.get('/', async (req, res) => {
    try{
        const users = await User.find().populate();
        return res.send({ users });
    } 
    catch(err){
        console.log(err)
    }
    
});

//Show
router.get('/:userID', async (req, res) => {
    try{
        const user = await User.findById(req.params.userID).populate();
        return res.send({ user });
    } 
    catch(err){
        console.log(err)
    }

});

//Update
router.put("/:userId", async (req, res) => {
    try {
        
        const user = await User.findByIdAndUpdate(req.params.userId, req.body)
        return res.send(
            {
                user,
                password
            }  
        )
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "Error updating user" })
    }
})

//Delete
router.delete('/:userID', async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.userID)
        return res.send() 
    }
    catch (err) {
        return res.status(400).send({ error: "Error removing user" })
    }
});

module.exports = app => app.use('/users', router);