var mongoose = require('../Config/db')
var validator = require('validator')
var jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid Email Address..")
            }
        }
    },
    password: {
        type:String,
        required:true,
        validate(value) {
            if(value.length < 8)
                throw Error('Too Small Password..')
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})
UserSchema.methods.generateAuthToken = async (user) => {
    //let user = this
    let token = await jwt.sign({ _id:user._id.toString()},'subhamjasani')
    user.tokens= user.tokens.concat({token})
    await user.save()
    return token
}

let User = mongoose.model('User',UserSchema)
module.exports = User

