
import { loginAdmin } from "../../controllers/user";
export default async (req, res) => {
  try{
    const { email, password } = req.body;
    const user = await loginAdmin({email,password});
      req.session.user = {
        id:user.id,
        name:user.firstName,
        email:user.email,
        profilePhoto:user.profilePhoto,
        coverPhoto:user.coverPhoto,
      };
      return res.redirect("/admin/dashboard");
    }
  
  
  catch(error){

    res.redirect("/admin/login");
  }
  
};
