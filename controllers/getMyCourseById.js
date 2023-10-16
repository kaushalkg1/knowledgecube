import courseBundle from "../models/course/create/Bundle/courseBundle";


export const getMyCourseByIdController = ({ courseid,id}) => {
    
   
   
  return courseBundle.findOne({ _id:courseid  ,author:id }).populate("author", "firstName lastName email _id , currentToken");;
};
 
  