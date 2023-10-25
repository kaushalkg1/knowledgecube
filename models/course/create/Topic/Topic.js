import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;
/*
 When You Create Topic From Any  Page, Create it and then Update -
   Ids array inside that Model with newly created Topic id .
   */ 
const TopicSchema = new Schema({
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
  /* Add Lessons in This Topic */
  lessonIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },
  /* Add Quizes in This Topic */
    quizIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },
  /* Add Other Topics in This Topic */
  
   topicIds: {
  type: Array,
  default:[{index:0,id:"",status:true}]
   },
  
 
  deleteItem: {
    type: Boolean,
    
    default: false,
  },
 

  

  

  createdAt: { type: Date, default: new Date() },

  
  lastUpdated: { type: Date, default: new Date() },
});


const Topic = model("Topic", TopicSchema);
export default Topic;