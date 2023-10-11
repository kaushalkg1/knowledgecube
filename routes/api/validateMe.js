import { validateUser, verifyToken } from "../../controllers/user";
export default async (req, res) => {
  
  try {
    const data = req.body;
      await verifyToken(data.user.currentToken);
    const { user, token } = await validateUser(data);
    // await User.findOneAndUpdate( { _id:user._id }, { currentToken:token } ); 
  
  
    res.json({ user, token });
  } catch (error) {
    res.status(403).json(error);
  }
};
