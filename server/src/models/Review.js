import mongoose from 'mongoose';

// TODO: define the Review schema per README.md section 1.

const reviewSchema = new mongoose.Schema(
  {
    courseCode: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5, validate: Number.isInteger },
    comment: { type: String },
    reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

reviewSchema.index({ courseCode: 1, reviewedBy: 1 }, { unique: true });

export const Review = mongoose.model('Review', reviewSchema);
