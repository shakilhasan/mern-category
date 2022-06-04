const mongoose = require("mongoose");

// schema
const schema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    level: { type: Number, required: true },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: false,
        default: null,
    }
  },
  { timestamps: true }
);

// indices
// text index for name
schema.index({ name: "text" });
// index for createdAt and updatedAt
schema.index({ createdAt: 1 });
schema.index({ updatedAt: 1 });

// reference model
const Product = mongoose.model("Category", schema);
const ModelName = "Category";

module.exports = { Model: Product, name: ModelName };
