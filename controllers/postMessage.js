import courseBundle from "../models/course/create/Bundle/courseBundle";


export const getPostMessage = () => {
  return courseBundle.find().populate("author", "firstName lastName email _id");;
};
  export const createPostMessage =  async ({ title, message, creator }) => {
    const createPostMessagek = await PostMessage.create({ title, message, creator });
    return createPostMessagek;
  };
  
  