import { updateUser , verifyToken } from "../../controllers/user";

export default async (req, res) => {
  try {
    
    const {id:_id} = req.params;
    const { field , token , value , id } = req.body;
       await verifyToken(token);
     const { user ,currentToken  } = await updateUser({ field, value , id  });
      
       
    res.json({ user , token:currentToken });
   
  } catch (error) {
    res.status(403).json(error); 
  }
};  
  