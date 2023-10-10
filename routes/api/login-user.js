import { loginUser } from "../../controllers/user";
import User from "../../models/user";
export default async (req, res) => {
  
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser({ email, password });
    
    await User.findOneAndUpdate( { _id:user._id }, { currentToken:token } ); 
  
  
    res.json({ user, token });
  } catch (error) {
    res.status(403).json(error);
  }
};
