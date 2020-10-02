const mongoose = require('mongoose');
const connection = require('./../db');

const yup = require('yup');
const emailValidSchema = yup.string().email();
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    title: {
        type: String,
        minLength: 1
    },
    text: {
        type: String,
        required: true
    }
});

const Message = connection.model('Message',messageSchema);

module.exports = Message;