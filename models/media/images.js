import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const imageSchema = new Schema({
    img: {
        type: String,
        required: true,
      }
      ,
      author: {
        type: ObjectId,
        ref: "User",
        required: true,
      },
      title: {
        type: String,
        default:"This is an image"
      },
  description: {
    type: String,
    default:"Description Not Available"
  }, 
  
  
 
 

  

  

  createdAt: { type: Date, default: new Date() },

  
  lastUpdated: { type: Date, default: new Date() },
});


const image = model("image", imageSchema);
export default image;