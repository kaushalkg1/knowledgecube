import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const LessonSchema = new Schema({
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
  
  
 
  deleteItem: {
    type: Boolean,
    
    default: false,
  },
  

  

  

  createdAt: { type: Date, default: new Date() },

  
  lastUpdated: { type: Date, default: new Date() },
});


const Lesson = model("Lesson", LessonSchema);
export default Lesson;