import courseBundle from "../models/course/create/Bundle/courseBundle";


export const editMyCourseByIdController = async ({ field, value ,id ,courseId})  => {
    try {
        let course ='';
        if(field ==="title") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
        course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { title:value} ); 
             }
             if(field ==="description") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
             course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { description:value} ); 
                  } if(field ==="publish") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                  course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { publish :value} ); 
                       }if(field ==="publishAtFutureDate") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                       course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { publishAtFutureDate :value} ); 
                            }
                            if(field ==="language") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                            course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { language:value} ); 
                                 }
                                 if(field ==="status") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                                 course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { status:value} ); 
                                      }  if(field ==="filter") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                                      course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { filter:value} ); 
                                           } if(field ==="visibility") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                                           course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { visibility:value} ); 
                                                }if(field ==="withPassword") { 
                                                
                                                  course = await courseBundle.findOne({ _id:courseId  ,author:id });
                                                const passwordData=  course.withPassword;
                                                const valueData= {...passwordData,status:value}
                                                course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { withPassword:valueData} ); 
                                                     }if(field ==="addPassword") { 
                                                
                                                      course = await courseBundle.findOne({ _id:courseId  ,author:id });
                                                    const passwordData=  course.withPassword;
                                                    const valueData= {...passwordData,password:value}
                                                    course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { withPassword:valueData} ); 
                                                         }
                                                     
                                                         if(field ==="courseDuration") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                                                         course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { courseDuration:value} ); 
                                                              }
                                                if(field ==="allowRatingReview") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                                                course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { allowRatingReview:value} ); 
                                                     }
                                                     if(field ==="payment") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                                                     course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { payment:value} ); 
                                                          }
                                           if(field ==="regularPrice") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                                                          course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { regularPrice:value} ); 
                                               }
                                               if(field ==="salePrice") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                                               course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { salePrice:value} ); 
                             }  if(field ==="taxApplicable") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
                             course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { taxApplicable:value} ); 
           }if(field ==="taxPrecentage") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
           course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { taxPrecentage:value} ); 
}
if(field ==="maximumStudent") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { maximumStudent:value} ); 
}
if(field ==="difficultyLevel") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { difficultyLevel:value} ); 
}
if(field ==="publicEnrollment") { course = await courseBundle.findOne({ _id:courseId  ,author:id });
course = await courseBundle.findOneAndUpdate( { _id:courseId  ,author:id }, { publicEnrollment:value} ); 
}
                                                                
             return Promise.resolve({ ...course})

      // const data = await courseBundle.findOne({ _id:courseId  ,author:id }).populate("author", "firstName lastName email _id , currentToken");;
      
  
      // if(field ==="title") {return Promise.resolve({ ...data});}
      
    
    } catch (error) {
        return Promise.reject({ error });
      }   
   
   
//   return courseBundle.findOne({ _id:courseId  ,author:id }).populate("author", "firstName lastName email _id , currentToken");;
};
 
  