// import { getPostMessage } from "../../controllers/postMessage";

// export default async (req, res) => {
//     try {
//       const posts = await getPostMessage();
//       res.json({ posts });
//     } catch (error) {
//       res.status(403).json(error);
//     }
//   };
  
import { getPostMessage } from "../../controllers/postMessage";

export default async (req, res) => {
  try {
    const posts = await getPostMessage();
    res.json({ posts });
  } catch (error) {
    res.status(403).json(error);
  }
};
