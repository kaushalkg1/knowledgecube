
import {  verifyToken } from "../../controllers/user";

import { editMyCourseByIdController } from "../../controllers/editMyCourseById";

import { getMyCoursesController } from "../../controllers/getMyCourses";

export default async (req, res) => {
  try {
   // console.log(req.body)
      const { field , token , value , id,courseId } = req.body;
     //console.log(field)
      await verifyToken(token);
      //console.log(token)
     
    const course = await editMyCourseByIdController({field, value ,courseId:courseId,id:id});
    //console.log(course)
    
    const posts = await getMyCoursesController({id:id});
    res.json({ posts, course });
  } catch (error) {
    res.status(403).json(error);
  }
};


