const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json()); // Middleware untuk parsing body JSON

const url = "mongodb+srv://Reyhanvars12345:Reyhanvars12345@cluster0.mtmjd.mongodb.net/";
// mongodb://localhost:27017/database
// Koneksi ke MongoDB menggunakan Mongoose
mongoose
  // .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })   => Jika menggunakan mongodb
  .connect(url, { dbName: 'namadatabase' } )   // => Jika menggunakan mongodb atlas
  .then(() => console.log("Koneksi ke MongoDB berhasil"))
  .catch((error) => console.log("Koneksi MongoDB gagal", error));


// Membuat Schema untuk produk
const barangSaya = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ["electronics", "fashion", "furniture"], // Membatasi kategori produk
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: [0, "Stock quantity cannot be negative"],
  },
  description: {
    type: String,
    maxlength: 200,
  },
});

// // Membuat Model Produk dari schema
const Product = mongoose.model("Product", barangSaya);

// Endpoint untuk memasukkan data pengguna ke koleksi pengguna
const tipePengguna = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  umur: {
    type: Number,
  },
});
const Pengguna = mongoose.model("Pengguna", tipePengguna);

// Endpoint untuk mendapatkan semua data produk
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Mengambil semua data produk
    res.status(200).json(products); // Mengembalikan data dalam format JSON
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Terjadi kesalahan data" });
  }
});


// Endpoint untuk menginput semua data user
app.post("/user", async (req, res) => {
  try {
    const user = new Pengguna({
      nama: req.body.nama,
      umur: req.body.umur,
    });

    await user.save();
    res.status(201).json({ message: "Pengguna berhasil ditambahkan", user });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Gagal menambahkan pengguna" });
  }
});

// Endpoint untuk mendapatkan semua data pengguna
app.get("/user", async (req, res) => {
  try {
    const pengguna = await Pengguna.find(); // Mengambil semua data pengguna
    res.status(200).json(pengguna);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data pengguna" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
