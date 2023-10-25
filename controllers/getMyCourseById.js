import courseBundle from "../models/course/create/Bundle/courseBundle";


export const getMyCourseByIdController = async ({ courseId,id}) => {
    
  try {
    let course ='';
    const data = await courseBundle.findOne({ _id:courseId  ,author:id }).populate("author", "firstName lastName email _id , currentToken");;
      
  
     return Promise.resolve({ ...data});
      
    
    } catch (error) {
        return Promise.reject({ error });
      }   
 };
 
  