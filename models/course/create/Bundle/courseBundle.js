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
    type:Date,
    default:new Date()
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
categoryIds:{
  type: Array,
  
  default: [],
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
    type: String,
    
    default: ""
  },
  featureVideo: {
    type: String,
    
    default: ""
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
  

  trash: {
    type: String,
    
    default: "Restored",
/* Restored , Deleted */
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
