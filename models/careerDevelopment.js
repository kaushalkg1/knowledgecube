

import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const userSchema = new Schema({
    user: {
        type: ObjectId,
        ref: "User",
        required: true,
      },
    projectLinks:{
    type: Array,
    default:[
      {projectName:"",link:""},
    {projectName:"",link:""}
  ]
  },
  careerDevelopment:{
    type:Object,
    default:{
      resume:" Not Available ",
      cdp:" Not Available ",/* Career Development Plan */
      swot:" Not Available ",/* SWOT Analysis  */
      journey:" Not Available ",/* Journey Video */
      technical:" Not Available ",/* Technical Knowledge Video */
      videoResume:" Not Available " }
  },
  skills:{
    type:Array,
    default:[{ skillName:"",description:""} , { skillName:"",description:""}  ]
  }
  ,
  jobCurrentInfo:{
  type:Object,
  default:{ jobStatus:" Not Available ", /* Fresher Or Doing Job */
  totalExperienceYears:0,
  internshipDuration:0,
  highestCTC:" Not Available "

  }
  },
  jobDetails:{
    type:Array,
    default:[{
        companyName:"",
        description:"",
        location:"",
        startDate:"",
        endDate:"",
        currentWorkingStatus:"",
        positionAtJob:""


    }]
  },
  education:{
    type:Object,
    default:{
      highestEducation:"",
      collegeName:"",
      percentageOrCGPA:"",
      tenthPercentage:"",
      twelthPercentage:" ",
      myUGPercentageOrCGPA:" ",
      myPGPercentageOrCGPA:" "
    }
  },
  address:{
    type:Object,
    default:{
      currentAddress:{
      currentCity:"",
      state:"",
      country:"",
      zipOrPin:""

    },homeAddress:{
      
      homeCity:"",
      state:"",
      country:"",
      zipOrPin:""

    }
  },
  createdAt: { type: Date, default: Date.now },
  lastModified: { type: Date, default: Date.now }
  }
})

const careerDevelopment = model("careerDevelopment", userSchema);

export default careerDevelopment;