import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const courseBundleSchema = new Schema({
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
  status: {
    type:String,
    default:"Draft",
    /* Draft , Running,  Archieved  */
  },
  filter: {
    type:String,
    default:"Trending",
    /* Trending , Coming Soon , Top Rated , Sponsored ,   */
  },
  language: {
    type:Array,
    default:["English"],
    /* English ,Hindi, Hinglish    */
  },
  visibility: {
    type:String,
    default:"Public"
    /* Public , Private , Password */
  },
  withPassword: {
    type:Object,
    default:{status:false,password:"Password"}
    /* if visibility is = Password , add Password here. */
  },
  publish: {
    type:String,
    default:"Immediately"
    /* Immediately , AtFutureDate */
  },
   publishAtFutureDate: {
    type:String,
    default:""
    /* If AtFutureDate , show Future Date */
  },
  courseDuration: {
    type: Number,
    
    default: 1,
/* add In  Hours  */
  },
  allowRatingReview: {
    type: Boolean,
    
    default: false,
/* add In ratingAndReview Collection  */
  },

  payment: {
    type: String,
    
    default: "Free",
/* Free , Paid */
  },

 maximumStudent: {
    type: Number,
    
    default: 0,
/*  Number of students that can enrol in this course. Set 0 for no limits. */
  },

  difficultyLevel: {
    type: String,
    
    default: "All",
/* All, Biginner, Intermediate, Expert*/
  },

  publicEnrollment: { 
    type: Boolean,
    
    default: false,
/* If Make This Course Public. No enrolment required. */
  },
  featureImage: {
    type: Array,
     /* array for image gallary */ 
    default: [{index:0,src:"",status:true}] 
  },
  featureVideo: {
    type: Array,
    /* type:"youtube,vimeo,externalLink"
    thumbnail: if empty it takes feature image[0] , if feature img not present it gets default img. 
    */
    default: [{index:0,type:"",src:"",thumbnail:"",status:true}]
  },

  regularPrice:{
    type:Number,
    default:0
  },
  salePrice:{
    type:Number,
    default:0
  },
  taxApplicable:{
    type:Boolean,
    default:true
  },
  taxPrecentage:{
    type:Number,
    default:0
  },
  suggestedCourseIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },
  /* update Category Ids in Course and Category Model Simulteneously */
 
  categoryIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },
/*  You may Be able To Add other course bundles  Directly in This Course Bundle  

no need to enrol in those bundles once you enrol in this course bundle . 
{  
   while enrolling in this course bundle , check   CourseBundleIds and enrol in those bundles directly as well 

}
*/
  courseBundleIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },
  /*  You may Be able To Add  Sub Course  Directly in This Course Bundle , 
  
   When You Create SubCourse From Course Bundle Page, Create it and then Update -
   subCourseIds array with newly created SubCourse id -> push it in array .
   just change index number to rearrange order .

   change objects index key -> 
   index:{index:arr[otherindex].index,id:arr[index].id,status:arr[index].status}
   otherindex:{index:arr[index].index,id:arr[otherindex].id,status:arr[otherindex].status}
      change array index ->
   let temp =arr[index];
   
   arr[index]=arr[otherindex];

   arr[otherindex]= temp;
   before-
[{index:0,id:"index",status:true},{index:1,id:"otherindex",status:true},]
after-
[{index:0,id:"otherindex",status:true},{index:1,id:"index",status:true},]
  first swap index - then swap whole object .
  */

  subCourseIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },
   /*  You may Be able To Add MileStones   Directly in This Course Bundle   */

 mileStoneIds: {
    type: Array,
    default:[{index:0,id:"",status:true}]
  },
  /*  You may Be able To Add Modules  Directly in This Course Bundle   */

moduleIds: {
  type: Array,
  default:[{index:0,id:"",status:true}]
},
/*  You may Be able To Add Topics Directly in This Course Bundle   */

topicIds: {
  type: Array,
  default:[{index:0,id:"",status:true}]
},

 
deleteItem: {
  type: Boolean,
  
  default: false,
},
  
  createdAt: { type: Date, default: new Date() },
  isApproved: {
    type: Boolean,
    default: true,  
  },
  
  lastUpdated: { type: Date, default: new Date() },
});

const courseBundle = model("courseBundle", courseBundleSchema);

export default courseBundle;
