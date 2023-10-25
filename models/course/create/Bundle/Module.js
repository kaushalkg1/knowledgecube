import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;
/*
 When You Create Module From MileStone  Page, Create it and then Update -
   ModuleIds array inside MileStone Model with newly created Module id .
   */ 
const ModuleSchema = new Schema({
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
 
/*  You may Be able To Add Modules  Directly in This  Module   */

moduleIds: {
type: Array,
default:[{index:0,id:"",status:true}]
},
/*  You may Be able To Add Topics Directly in This Module   */

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


const Module = model("Module", ModuleSchema);
export default Module;