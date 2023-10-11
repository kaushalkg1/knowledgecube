import { Router } from "express";
import getPosts from "./get-posts";
import storePost from "./store-post";
import loginUser from "./login-user";
import signUpUser from "./signup-user";
import getPost from "./get-post";
import deletePost from "./delete-post";

import catchAll from "./catch-all";
import verify from "./verify";
import protectApi from "../../utils/protectApi";
import cors from 'cors' ;
import updateUser from "./updateUser";
import createCourse from "./createCourse";
import getAllCourses from "./getAllCourses";
import getMyCourses from "./getMyCourses";

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
router.post("/myCourse", getMyCourses);


router.post("/login", loginUser);
 
router.post("/signup", signUpUser);
router.post("/createCourse", createCourse);
 
router.route("/updateUser")
.post( updateUser);

router.post("/verify", verify);
router.use(catchAll);

export default router;
