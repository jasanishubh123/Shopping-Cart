const express = require('express')
const router = express.Router()
const User = require('../Model/User')

const auth = async (req,res,next) => {
    let token = req.header("Authorization")
    
    try {
        if(!token) {
            return res.status(404).send("Please Authorize")
        } else {
            let user = await User.findOne({'tokens.token':token})
            if(!user) return res.status(404).send("User Not Found")
            else {
                req.user = user
                req.token = token
                next()
            }
        }
    } catch (error) {
        res.status(400).send(error)
    }
}
router.get('/users', async (req,res) => {
    try {
        let users = await User.find({})
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.get('/users/me', auth, (req,res) => {
    try {
        res.status(200).send(req.user)
    } catch (error) {
        res.status(500).send()
    }
})
router.post('/users', async (req,res) => {
    try {
        let user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.post('/users/login', async (req,res) => {
    try {
        let user = await User.findOne({ email:req.body.email,password:req.body.password })
        if(!user) return res.status(404).send("User not Found")
        else {
            let token = await user.generateAuthToken(user)
            res.status(200).send({ user, token })
        }
    } catch (error) {
        res.status(400).send(error)
    }
})
// const generateAuthToken = (user) => {

// }
module.exports = router