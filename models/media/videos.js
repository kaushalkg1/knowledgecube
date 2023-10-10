import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const videoSchema = new Schema({
    videoType: {
        type: String,
        required: true,
        default:"youtube"
        /* Youtube , Vimeo , External */
      }
      ,
      videoLink: {
        type: String,
        required: true,
        default:""
      },
      author: {
        type: ObjectId,
        ref: "User",
      },
      title: {
        type: String,
       default:"This is a video"
      },
  description: {
    type: String,
    default:"Description Not Available"
  }, 
  
  
 
 

  

  

  createdAt: { type: Date, default: new Date() },

  
  lastUpdated: { type: Date, default: new Date() },
});


const video = model("video", videoSchema);
export default video;