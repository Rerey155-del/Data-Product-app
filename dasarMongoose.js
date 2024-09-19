const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://localhost:27017/database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//  Membuat Schema
const Contact = mongoose.model("Contact", {
  nama: {
    type: String,
    required: true,
  },
  nohp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Menambah satu data
const contact1 = new Contact({
  nama: "Reyhan Maulana",
  nohp: "083801012326",
  email: "reyhanmaulana@gmail.com",
});

// Simpan ke collection
contact1.save().then((contact)=>console.log(contact))