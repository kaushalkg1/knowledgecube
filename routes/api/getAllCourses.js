
  
import { getAllCoursesController } from "../../controllers/getAllCourses";

export default async (req, res) => {
  try {
    const posts = await getAllCoursesController();
    res.json({ posts });
  } catch (error) {
    res.status(403).json(error);
  }
};
