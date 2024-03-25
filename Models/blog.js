const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema= new schema({
Title_en: {
    type: String,
    required: true
    },
Category_en: {
    type: String,
    required: true
    },
Blog_Keywords_en: {
    type: String,
    required: true
    },
Para_en: {
    type: String,
    required: true
    },
Title_ar: {
    type: String,
    required: true
    },
Category_ar: {
    type: String,
    required: true
    },

Blog_Keywords_ar: {
    type: String,
    required: true
    },
Para_ar: {
    type: String,
    required: true
    },
slug: {
    type: String,
    required: true
    },
Cover_img_alt: {
  type: String,
  required: true
  },
coverimg: {
    type: String,
    required: false
    },
thumbnail: {
    type: String,
    required: false
    }
}, {timestamps: true});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

module.exports = Blog;