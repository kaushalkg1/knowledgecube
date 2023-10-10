import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const faqSchema = new Schema({
  faqNumber: {
    type: Number,
    
  },
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
  },
  course: {
    type: ObjectId,
    ref: "addCourse",
  },
 
 


  hasImage: {
    type: Boolean,
    
    default: false,
/* If True add Image In Images Collection */
  },
  hasVideo: {
    type: Boolean,
    
    default: false,
/* If True  add youtube video link In Videos Collection */
  },

  

  

  createdAt: { type: Date, default: new Date() },

  
  lastUpdated: { type: Date, default: new Date() },
});


const faq = model("faq", faqSchema);
export default faq;