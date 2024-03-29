const mongoose = require('mongoose');

const userSchema = new Schema({
    username: {
        type: 'String',
        required: true,
    },
    email: {
        type: 'String',
        required: true,
    },
    phone: {
        type: 'String',
        required: true,
    },
    password: {
        type: 'String',
        required: true,
    },
    isAdmin: {
        type: 'String',
        required: true,
    }
})

export const User = new mongoose.Model("User", userSchema)