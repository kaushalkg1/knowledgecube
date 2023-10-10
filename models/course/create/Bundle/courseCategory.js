import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const courseCategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }, 
  author: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  courseBundle: {
    type: ObjectId,
    ref: "courseBundle",
    required: true,
  },
  showInFilter: {
    type: Boolean,
    
    default: true,
  },

 


  featureImage: {
    type: Boolean,
    
    default: false,
/* If True add Image In Images Collection */
  },
  featureVideo: {
    type: Boolean,
    
    default: false,
/* If True  add youtube video link In Videos Collection */
  },

  

  

  createdAt: { type: Date, default: new Date() },

  
  lastUpdated: { type: Date, default: new Date() },
});


const courseCategory = model("courseCategory", courseCategorySchema);
export default courseCategory;