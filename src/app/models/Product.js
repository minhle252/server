const mongoose = require("mongoose");
const { Schema } = mongoose;

const Product = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true, ref: "categories" },
    description: { type: String, required: true, default: "" },
    reviewSchema: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "ReviewSchema",
      },
    ],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);
// const product = mongoose.model("product", Product);
module.exports = mongoose.model("product", Product);

// products.create(
//   {
//     name: "Lace Walking Shoes for boy & Girls (Pink)",
//     image: "/images/2.png",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//     price: 49,
//     countInStock: 7,
//     rating: 2,
//     numReviews: 2,
//   },
//   {
//     name: "Women Red Heels Sandal",
//     image: "/images/1.png",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//     price: 29,
//     countInStock: 3,
//     rating: 0,
//     numReviews: 0,
//   }
// );
