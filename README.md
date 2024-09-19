# Data-Product-app

This repository contains a simple login application that allows users to submit their name and age via a form. The application also displays a list of products stored in a MongoDB database. The database is managed locally using MongoDB Compass, while the backend is built using Node.js and Express.

## Features

- **Frontend**: A simple HTML form to input `nama` and `umur`.
- **Backend**: REST API using Node.js, nodemon, and Express.
- **Database**: MongoDB (via MongoDB Compass) connected with Mongoose.
- **Alerts**: SweetAlert is used for notifying the user about login success or failure.

## Technologies

- **Frontend**: HTML, CSS, JavaScript (with Fetch API), SweetAlert for alerts.
- **Backend**: Node.js, Express, Mongoose for MongoDB.
- **Database**: MongoDB (using MongoDB Compass for local management).

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/)
- **MongoDB**: [Install MongoDB locally](https://www.mongodb.com/try/download/community)
- **MongoDB Compass**: [Download Compass](https://www.mongodb.com/products/compass)

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/login-mongodb-app.git
    cd login-mongodb-app
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Configure MongoDB (Local):**

    - Ensure MongoDB is running locally on your machine (usually at `mongodb://localhost:27017`).
    - Open **MongoDB Compass** and create a database named `database`.
    - Create a collection named `pengguna` in this database (nama, umur).
    - Create also a collection named `product` in this database (name, price, category, inStock, stockQuantity, description).

4. **Configure MongoDB Connection:**

    In `server.js`, make sure your MongoDB connection string looks like this:

    ```javascript
    const mongoURI = 'mongodb://127.0.0.1:27017/database';
    ```

5. **Start the Backend Server:**

    ```bash
    node server.js
    ```

    The server will start at `http://localhost:3000`.

6. **Run the Frontend:**

    Open `login.html` in your browser to access the login form.
    Open 'daftar_produk.html' untuk akses tampilan beberapa produk dari database

## API Endpoints

- **POST /user**: Submits user data (`nama` and `umur`) to the MongoDB database.

### Example POST Request:
masukkan URL dari '/user' yang methode POST ke bagian body dari aplikasi postman, dan inputkan datanya seperti ini :

{
  "nama": "John Doe",
  "umur": 25
}

lalu kirim kan dan mendapatkan hasil jika telah diinput

