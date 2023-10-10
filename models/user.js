





import { Schema, model } from "mongoose";
//import { join } from "path";

const profilePic = "http://www.ilogically.com/wp-content/uploads/2023/08/727399.png";
const coverPic = "http://www.ilogically.com/wp-content/uploads/2023/08/coverPic.gif";

import bcrypt from "bcrypt"
const userSchema = new Schema({
  
  name: {
    type: String
  },  
  firstName: {
    type: String,
    required: true,
  },
   lastName: {
    type: String,
    required: true,
  },fullName: {
    type: String,
    default: "Not Added",
  }
  ,userName: {
    type: String,
     unique: true

  },currentToken: {
    type: String,
    

  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    /*
    password should not be saved as plain text , we will store hash string of password and
     later validate them when user attempts to login
   we use  module bcrypt -> bcrypt is password hashing function.
     install it -(npm i bcrypt);
     and import it=> import bcrypt from "bcrypt"
    */
    type: String,
    required: true,
  }, 
  acceptTermsAndConditions: {
    type: Boolean,
    default: false,
  },
  subscribeToNewsleter: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },isCreator: {
    type: Boolean,
    default: false,
  },phoneNumber: {
    type: Number,
    default: +91,
  },isVerified: {
    type: Boolean,
    default: false,
  },verfyToken: {
    type: String,
    default: "",
  },gender: {
    type: String,
    default: "",
  },age: {
    type: String,
    default: "",
  },bio: {
    type: String,
    default: "",
  },profilePhoto: {
    type: String,
    default: profilePic,
  },coverPhoto: {
    type: String,
    default: coverPic,
  },role: {
    type: String,
    default: "student",
    /*  student , creator, admin  */
  }
  ,goal: {
    type: String,
    default: "",
    /* as per course category */
  },theme: {
    type: String,
    default: "white",
    /* white, dark */
  },deactiveteAcount: {
    type: Boolean,
    default: false,
    /* no one can see your profile , msg , posts etc when you deactivate */
  },privateAccount: {
    type: Boolean,
    default: false,
    /* only folowers can see profile , message , posts */
    
  },activeStatus: {
    type: Boolean,
    default: false,
    /* for messenger */
  },socialProfile: {
    type: Object,
    default: {facebook:"",
              twitter:"",
              linkedIn:"",
               github:"",
              website:"" ,
              youtube:"" ,
              instagram:"" ,
            },
    /* for messenger */
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
  }
},education:{
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
  careerDevelopment:{
    type:Object,
    default:{
      resume:"",
      cdp:"",/* Career Development Plan */
      swot:"",/* SWOT Analysis  */
      journey:"",/* Journey Video */
      technical:"",/* Technical Knowledge Video */
      videoResume:"" }
  },
  skills:{
    type:Array,
    default:[{ skillName:"",description:"" , show:true
    } , { skillName:"",description:"", show:true}  ]
  }
  ,
  jobCurrentInfo:{
  type:Object,
  default:{ jobStatus:"", /* Fresher Or Doing Job */
  totalExperienceYears:0,
  internshipDuration:0,
  highestCTC:""

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
        positionAtJob:"",
        show:true


    }]
  },
  
  projectLinks:{
    type: Array,
    default:[
      {projectName:"",link:"",  show:true
    },
    {projectName:"",link:"" , show:true
  }
  ]
  },
});

/*
 create pre save hook on schema ->
  it will modify content of schema right before it saves it to mongodb.
*/ 
userSchema.pre("save",function(next){
  /* whenever a new document is created or updated and the password is modified  if not then go next */

  this.fullName = this.firstName+" "+this.lastName;

  if(!this.isModified("password")){

 return next();  /* invoke next middleware ( here save document to mongodb )*/


}
 /* if the password is modified  then set its hash so that new hashed string is sent to db */
 
this.password = bcrypt.hashSync(this.password,10); /* 10 -> round of salt , iteratively modify adding  10 random characters.
*/

this.verfyToken = bcrypt.hashSync(this.email,10);
/* everytyme the password changes , verify token changes . but once verified , it has no use.
when account created  , verify link goes to email address , 
when they click link , they will redirected to verify page which updates the verify status to true
. 
if link expired , they can ask to resend the link by clicking , send verification link  to registered email btn.
*/
return next();  /* invoke next middleware ( here save document to mongodb )*/

})

userSchema.methods.checkPassword = async function (password){
  // return Promise.resolve();
  try{

    const match = await bcrypt.compare(password,this.password);
    if (match) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
    // return Promise.resolve();
   } catch (error){
  return Promise.reject(error);
  }
}

userSchema.methods.updateLoggedIn =  function (){
  return this.model("User").findOneAndUpdate(
    {email:this.email,},
    {lastLoggedIn:new Date()
    }
    )
}

const User = model("User", userSchema);

export default User;

















// import { Schema, model } from "mongoose";
// import bcrypt from "bcrypt";

// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   createdAt: { type: Date, default: Date.now },
//   lastLoggedIn: { type: Date, default: Date.now },
//   isAdmin: {
//     type: Boolean,
//     default: false,
//   },
// });

// userSchema.pre("save", function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   this.password = bcrypt.hashSync(this.password, 10);
//   next();
// });

// userSchema.methods.checkPassword = async function (password) {
//   const match = await bcrypt.compare(password, this.password);
//   if (match) {
//     return Promise.resolve();
//   } else {
//     return Promise.reject();
//   }
// };

// userSchema.methods.updateLoggedIn = function () {
//   return this.model("User").findOneAndUpdate(
//     { email: this.email },
//     { lastLoggedIn: new Date() }
//   );
// };

// const User = model("User", userSchema);

// export default User;
