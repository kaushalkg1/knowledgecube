import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const QuizSchema = new Schema({
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
  questionIds: {
    type: Array,
    default:[{index:0,id:""}]
  },
   
  
 
 

 
  deleteItem: {
    type: Boolean,
    
    default: false,
  },
  

  

  createdAt: { type: Date, default: new Date() },

  
  lastUpdated: { type: Date, default: new Date() },
});


const Quiz = model("Quiz", QuizSchema);
export default Quiz;