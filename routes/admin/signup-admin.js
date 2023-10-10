import { signUpAdmin } from "../../controllers/user"
export default async (req,res)=> {
    
    try {
  const {firstName ,userName,lastName,email , password} = req.body;
  /*
  req.body -> get  values of form input with name fields,  when the form submits ,
    it can be accessed as object in the req.body , destructure it  &
   {name ,email , password} are name fields of input in the form
  */


  await signUpAdmin({firstName ,userName,lastName,email , password /* sending extracted input values to db */ })
  /* if all goes well redirect to login or custom code to do anything after signup , initial steps etc */
  res.redirect("/admin/login");

    }
    catch (error){ 
         /* if all goes well redirect to same page or custom msg to say-> signup failed */
 
        res.redirect("/admin/signup");

    }
}