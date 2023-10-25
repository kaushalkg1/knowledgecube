import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const CategorySchema = new Schema({
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
   /* update Category Ids in Course and Category Model Simulteneously 
   
   using Category filter with course ids you can get all Courses quickly 
   */
 
  parentCourseBundleIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },

  /* update Category Ids in SubCourse and Category Model Simulteneously
  
   using Category filter with subcourse ids you can get all SubCourses quickly 
  */
 
  parentSubCourseIds: {
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


const Category = model("Category", CategorySchema);
export default Category;