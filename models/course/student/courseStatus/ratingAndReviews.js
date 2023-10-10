import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;
// import profanityFilter from "../utils/profanityFilter";

const ratingAndReviewsSchema = new Schema({
  rating: {
    type: Number,
   default:5
  },
  review: {
    type: String, 
    default:"Review Not Added"
  }, 
  coursUser: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  courseBundle: {
    type: ObjectId,
    ref: "courseBundle",
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },


  

  createdAt: { type: Date, default: new Date() },

  
  lastUpdated: { type: Date, default: new Date() },
});

const ratingAndReviews = model("ratingAndReviews", ratingAndReviewsSchema);

export default ratingAndReviews;
