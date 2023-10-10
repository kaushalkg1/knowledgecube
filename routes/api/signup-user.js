import { signUpUser } from "../../controllers/user";

export default async (req, res) => {
  try {
    const {  firstName,lastName, userName,email, password, acceptTermsAndConditions,
      subscribeToNewsleter,phoneNumber,age,bio,gender} = req.body;
    const { user, token } = await signUpUser({ firstName,lastName, userName, email, password, acceptTermsAndConditions,
      subscribeToNewsleter,phoneNumber,age,bio,gender });
     // console.log(user)
    res.json({ user, token });
  } catch (error) {
    res.status(403).json(error);
  }
};  
