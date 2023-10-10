import { updatePostMessage } from "../../controllers/postMessage";


export default async (req, res) => {
    try {
     const {id:_id} = req.params;
     const {title, messsage, tags }= req.body;
     if(!mongoose.Types.ObjecId.isValid(_id)) return res.status(404).send("No Post With that Id")
      const { posts } = await updatePostMessage({_id,title, messsage, tags});
      res.json({ posts });
    } catch (error) {
      res.status(403).json(error);
    }
  };
