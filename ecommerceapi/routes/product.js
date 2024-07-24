const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
const multer = require("multer");
const { storage } = require("../middleware/cloudinaryConfig");

const upload = multer({ storage });

//CREATE
router.post(
  "/upload",
  verifyTokenAndAdmin,
  upload.single("image"),
  async (req, res) => {
    console.log("Request body:", req.body);
    console.log("File info:", req.file);
    const newProduct = new Product({
      ...req.body,
      imageUrl: req.file.path, // Save Cloudinary URL in the product model
    });
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      console.error("Error saving product:", err);

      res.status(500).json(err);
    }
  }
);

//UPDATE
router.put(
  "/:id",
  verifyTokenAndAdmin,
  upload.single("image"),
  async (req, res) => {
    const updatedData = {
      ...req.body,
    };
    if (req.file) {
      updatedData.imageUrl = req.file.path; // Update image URL if a new image is uploaded
    }
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: updatedData },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      console.error("Error updating product:", err);

      res.status(500).json(err);
    }
  }
);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    console.error("Error deleting product:", err);

    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    console.error("Error finding product:", err);

    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    console.error("Error finding products:", err);

    res.status(500).json(err);
  }
});

module.exports = router;
