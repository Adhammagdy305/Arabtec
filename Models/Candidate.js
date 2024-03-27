const mongoose = require('mongoose');
const schema = mongoose.Schema;

const jobappSchema= new schema({
Name: {
    type: String,
    required: true
    },
Phone: {
    type: String,
    required: true
    },
Email: {
    type: String,
    required: true
    },
country: {
    type: String,
    required: true
    },
City: {
    type: String,
    required: true
    },
Address: {
    type: String,
    required: true
    },
Applying_for: {
    type: String,
    required: true
    },
Experience: {
    type: String,
    required: true
    },
Expected_Salary: {
    type: String,
    required: true
    },
Available_to_start: {
  type: String,
  required: true
  },
More_info: {
    type: String,
    required: false
    },
Why_Arabtec: {
    type: String,
    required: false
    },
Comments: {
     type: String,
     required: false
     },
CV: {
    type: String,
    required: false
    }
}, {timestamps: true});

const Candidate = mongoose.models.Candidate || mongoose.model('Candidate', jobappSchema);

module.exports = Candidate;