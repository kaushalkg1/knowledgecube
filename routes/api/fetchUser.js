import { fetchUser  } from "../../controllers/user";

export default async (req, res) => {
  try {
    const {  currentToken , id } = req.body;
    //await verifyToken(token);
     
    const { user , token   } = await fetchUser({  id, currentToken  });
      
       
    res.json({ user , token });
   
  } catch (error) {
    res.status(403).json(error); 
  }
};  
 