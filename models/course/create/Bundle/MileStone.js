import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;
/*
 When You Create Milestone From SubCourse  Page, Create it and then Update -
   MilestoneIds array inside SubCourse Model with newly created Milestone id .
   */
const MileStoneSchema = new Schema({
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
  
   /*  You may Be able To Add MileStones   Directly in This  Milestone  */

 mileStoneIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },
  /*  You may Be able To Add Modules  Directly in This  Milestone   */

moduleIds: {
  type: Array,
  default:[{index:0,id:"",status:true}]
},
/*  You may Be able To Add Topics Directly in This Milestone   */

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


const MileStone = model("MileStone", MileStoneSchema);
export default MileStone;