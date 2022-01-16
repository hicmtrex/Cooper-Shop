import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: 'User',
    },
    name: { type: String, require: true, unique: true },
    fullName: { type: String, require: true },
    image: { type: String, require: true },
    thumbnail: { type: String, default: '/images/hp-i5.jpg' },
    price: { type: Number, require: true },
    rating: { type: Number, default: 2 },
    brand: { type: String, require: true },
    category: { type: String, require: true },
    description: { type: String, require: true },
    countInStock: { type: Number, required: true, default: 100 },
    reviews: [reviewSchema],
    numReviews: { type: Number, required: true, default: 0 },
    specifications: [String],
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
