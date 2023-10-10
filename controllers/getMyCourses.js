import courseBundle from "../models/course/create/Bundle/courseBundle";


export const getMyCoursesController = ({id:id}) => {
    
   
   
  return courseBundle.find({ author:id  }).populate("author", "firstName lastName email _id , currentToken");;
};
 
  