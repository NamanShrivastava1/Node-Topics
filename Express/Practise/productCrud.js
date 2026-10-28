const express = require("express");
const app = express();

app.use(express.json());

const products = [
  { id: crypto.randomUUID().split("-")[0], name: "Laptop", price: 999 },
  { id: crypto.randomUUID().split("-")[0], name: "Mouse", price: 25 },
  { id: crypto.randomUUID().split("-")[0], name: "Mens T-Shirt", price: 5000 },
  { id: crypto.randomUUID().split("-")[0], name: "Kids Shirts", price: 2990 },
];

app.post("/product", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "All fields are required!",
    });
  }

  let newProduct = {
    id: crypto.randomUUID().split("-")[0],
    name: name,
    price: price,
  };

  products.push(newProduct);

  return res.status(201).json({
    message: "Product added successfully",
    product: newProduct,
  });
});

app.get("/get-products", (req, res) => {
  return res.status(200).json({
    message: "Products fetched successfully",
    products: products,
  });
});

app.patch("/update/:productId", (req, res) => {
  const { name } = req.body;
  const product = products.find((p) => p.id === req.params.productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found!" });
  }

  product.name = name;

  return res.status(200).json({
    message: "Product updated successfully",
    data: product,
  });
});

app.delete("/delete/:productId", (req, res) => {
  const productIndex = products.findIndex((p) => p.id === req.params.productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product ID not found!" });
  }

  const [deletedProduct] = products.splice(index, 1);

  return res.status(200).json({
    message: "Product deleted successfully",
    data: deletedProduct,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
