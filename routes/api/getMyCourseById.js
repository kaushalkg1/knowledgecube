
import {  verifyToken } from "../../controllers/user";

import { getMyCoursesController } from "../../controllers/getMyCourses";
import { getMyCourseByIdController } from "../../controllers/getMyCourseById";

export default async (req, res) => {
  try {
    
      const { courseid, id , token } = req.body;
     // console.log(id)
      await verifyToken(token);
      //console.log(token)
     
    const posts = await getMyCoursesController({id:id});
    const course = await getMyCourseByIdController({courseid:courseid,id:id});
   // console.log(posts )
    res.json({ posts, course });
  } catch (error) {
    res.status(403).json(error);
  }
};


