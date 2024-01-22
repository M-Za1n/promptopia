import { Schema, model, models } from 'mongoose'
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'user name is required'],
        unique: [true, 'user name already in use']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email already exist']
    },
    image: {
        type: String
    }
})
const User = models.User || model('User', userSchema)

export default User