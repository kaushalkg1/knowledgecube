import { createPostMessage } from "../../controllers/postMessage";

export default async (req, res) => {
  try {
  
    const  posts  = await createPostMessage(req.body);
    //console.log(posts)
    res.json(posts);
  } catch (error) {
    res.status(403).json(error);
  }
};
