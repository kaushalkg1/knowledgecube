import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
   
  }, 
  message: {
    type: String,
    
  },
  creator: {
    type: String,
    
  }, tags: {
    type: [String],
    
  },
  createdAt: { type: Date, default: new Date() },
  
});



const PostMessage = model("PostMessagek", postSchema);

export default PostMessage;
