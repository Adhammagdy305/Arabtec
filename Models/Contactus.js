const mongoose = require('mongoose');
const schema = mongoose.Schema;

const contactSchema= new schema({
Name: {
    type: String,
    required: true
    },
Email: {
    type: String,
    required: true
    },
Comments: {
    type: String,
    required: true
    }

}, {timestamps: true});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

module.exports = Contact; 