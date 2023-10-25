import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;
/*
 When You Create SubCourse From Course Bundle Page, Create it and then Update -
   subCourseIds array inside Course Bundle Model with newly created SubCourse id 
   */
const SubCourseSchema = new Schema({
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
  /* update Category Ids in SubCourse and Category Model Simulteneously */
  categoryIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },
  /*  You may Be able To Add  Sub Course  Directly in This  Sub Course    */

  subCourseIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },
   /*  You may Be able To Add MileStones   Directly in This  Sub Course     */

 mileStoneIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },
  /*  You may Be able To Add Modules  Directly in This  Sub Course   */

moduleIds: {
  type: Array,
  default:[{index:0,id:"",status:true}]
},
/*  You may Be able To Add Topics Directly in This Sub Course    */

topicIds: {
  type: Array,
  default:[{index:0,id:"",status:true}]
},

  showInFilter: {
    type: Boolean,
    
    default: true,
  },

 
  deleteItem: {
    type: Boolean,
    
    default: false,
  },


  

  createdAt: { type: Date, default: new Date() },

  
  lastUpdated: { type: Date, default: new Date() },
});


const SubCourse = model("SubCourse", SubCourseSchema);
export default SubCourse;