import { Router } from "express";
import loginUser from "./login-user";
import signUpUser from "./signup-user";
import validateMe from "./validateMe";
import catchAll from "./catch-all";
import verify from "./verify";
import cors from 'cors' ;
import updateUser from "./updateUser";
import createCourse from "./createCourse";
import getAllCourses from "./getAllCourses";
import getMyCourses from "./getMyCourses";
import getMyCourseById from "./getMyCourseById";

const router = Router();
router.use(cors());

// router.get("/posts", getPosts);


//router.post("/postsk/:id", updatePostMessage);
// router
//   .route("/post/:postId?")
//   .get(getPost)
//   .post(protectApi, storePost)
//   .delete(protectApi, deletePost);
router.get("/", getAllCourses);
router.post("/myCourses", getMyCourses);
router.post("/myCourse", getMyCourseById);


router.post("/login", loginUser);
router.post("/validateMe", validateMe);
 
router.post("/signup", signUpUser);
router.post("/createCourse", createCourse);
 
router.route("/updateUser")
.post( updateUser);

router.post("/verify", verify);
router.use(catchAll);

export default router;
