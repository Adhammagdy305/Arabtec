const mongoose = require('mongoose');
const schema = mongoose.Schema;

const projSchema= new schema({
    St_Date: {
        type: [Number],
        required: true
        },
    Name_en: {
        type: String,
        required: true
        },
    Service_en: {
        type: String,
        required: true
        },
    Location_en: {
        type: String,
        required: true
        },    
    Prj_Description_en: {
        type: String,
        required: true
        },
    Alt_Img_PP_en: {
        type: String,
        required: true
        },
    Second_Description_en: {
        type: String,
        required: true
        },
    Proj_Keywords_en: {
        type: [String],
        required: true
        },
    Name_ar: {
        type: String,
        required: true
        },
    Service_ar: {
        type: String,
        required: true
        },
    Location_ar: {
        type: String,
        required: true
        },    
    Prj_Description_ar: {
        type: String,
        required: true
        },
    Alt_Img_PP_ar: {
        type: String,
        required: true
        },
    Second_Description_ar: {
        type: String,
        required: true
        },
    Proj_Keywords_ar: {
        type: [String],
        required: true
        }, 
    Coverimg: {
        type: String,
        required: true
        },
    Thumbnail: {
        type: String,
        required: true
        },
    Gallery: {
        type: Array,
        required: false
        }},

        {timestamps: true});

const Project = mongoose.model('Project',projSchema);
module.exports = Project;