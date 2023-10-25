import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const ScheduleSchema = new Schema({
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

  startDate:{
    type: Date,
    required: true,
  } , endDate:{
    type: Date,
    required: true,
  },
 /*  Add  Sub Courses   to be completed In This Schedule Dates   */

 subCourseIds: {
  type: Array,
  default:[{index:0,id:"",status:true}]
},
 /*  Add  Milestones  to be completed In This Schedule Dates   */

mileStoneIds: {
  type: Array,
  default:[{index:0,id:"",status:true}]
},
/*  Add  Modules  to be completed In This Schedule Dates   */

moduleIds: {
type: Array,
default:[{index:0,id:"",status:true}]
},
/*  Add  Topics to be completed In This Schedule Dates   */

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


const Schedule = model("Schedule", ScheduleSchema);
export default Schedule;