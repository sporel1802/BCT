const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // allows parsing JSON request bodies

const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());

// Connect to MongoDB
// MongoDB connection
mongoose.connect('mongodb+srv://snehasishporel6:qFz.wKtQLecu6Rb@mean.tnry7lt.mongodb.net/')
  .then(() => console.log('MogoDB connected'))
  .catch(err => console.log(err));

// Create Product Schema & Model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

const Product = mongoose.model('Product', productSchema);



// ✅ This is the new GET route
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// POST a new product
app.post('/api/products', async (req, res) => {
  const { name, price, description } = req.body;

  const newProduct = new Product({
    name,
    price,
    description
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// DELETE a product by ID
app.delete('/api/products/:id', async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET a single product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});