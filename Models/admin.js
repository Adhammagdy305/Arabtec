const mongoose = require('mongoose');
const schema = mongoose.Schema;

const adminSchema= new schema({
Username: {
    type: String,
    required: true
    },
Password: {
    type: String,
    required: true
    },
Level: {
    type: Number,
    required: true
}
});

const Admin = mongoose.model('Admin',adminSchema);
module.exports = Admin;