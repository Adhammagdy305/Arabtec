const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema= new schema({
author: {
    type: String,
    required: true
    },
title: {
    type: String,
    required: true
    },
tags: {
  type: String,
  required: true
  },
intro: {
    type: String,
    required: true
    },
npara: {
    type: Number,
    required: true
    },
paragraph: {subtitles: {
    type: Array,
    required: true,
    validate: {
      validator: function (v) {
        return v.length === this.npara;
      },
      message: props => `${props.value.length} subtitles are provided, but npara is ${this.npara}.`
    }},
    body:{
        type: Array,
        required: true,
        validate: {
          validator: function (v) {
            return v.length === this.npara;
          },
          message: props => `${props.value.length} subtitles are provided, but npara is ${this.npara}.`
        }}},
conc: {
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

const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;