import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const QuestionSchema = new Schema({
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
  },  lessonIds: {
    type: Array,
    default:[]
  },
   
 
  deleteItem: {
    type: Boolean,
    
    default: false,
  },
  
  

  

  createdAt: { type: Date, default: new Date() },

  
  lastUpdated: { type: Date, default: new Date() },
});


const Question = model("Question", QuestionSchema);
export default Question;