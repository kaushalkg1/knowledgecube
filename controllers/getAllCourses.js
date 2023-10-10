import courseBundle from "../models/course/create/Bundle/courseBundle";


export const getAllCoursesController = () => {
  return courseBundle.find().populate("author", "firstName lastName email _id ");;
};
 
       