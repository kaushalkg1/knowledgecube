
import {  verifyToken } from "../../controllers/user";

import { getMyCoursesController } from "../../controllers/getMyCourses";

export default async (req, res) => {
  try {
    
      const {  id , token } = req.body;
     // console.log(id)
      await verifyToken(token);
      //console.log(token)
     
    const posts = await getMyCoursesController({id:id});
   // console.log(posts )
    res.json({ posts });
  } catch (error) {
    res.status(403).json(error);
  }
};


