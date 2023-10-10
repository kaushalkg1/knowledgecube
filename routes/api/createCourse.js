import { createCourse } from "../../controllers/courseBundle"; 

export default async (req, res) => {
  try {
    const {  title,description,author} = req.body;
    
    const { courseBundle } = await createCourse({ title,description,author });
     // console.log(user)
    res.json({ courseBundle });
  } catch (error) {
    res.status(403).json(error);
  }
};  
