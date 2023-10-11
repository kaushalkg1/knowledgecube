import User from "../models/user";
import jwt from "jsonwebtoken";

const sign = (obj) =>
  new Promise((resolve, reject) => {
    jwt.sign(obj, "MegaMind", (error, token) => {
      if (error) return reject(error);

      return resolve(token);
    });
    // jwt.sign(obj, process.env.jwtPrivateKey, (error, token) => {
    //   if (error) return reject(error);
  
    //   return resolve(token);
    // });
  
  
  });


const verify = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, "MegaMind", (error) => {
      if (error) return reject();
      return resolve({ success: true });
    });
  });









  
  export  const signUpAdmin = async({firstName, userName,lastName,email, password})=>{
    try{
        /*
        to create the document , all fields in schema should be sent in create({}) field . 
        if you skip even a  single field document will not be created , 
        */ 
     await User.create({firstName, userName,lastName,email, password,isAdmin:true,isCreator:true,
        role:"admin"});
     /*
     Creates New Document using User schema and stores it in user collection.
     User.create( uses schema to construct a document based on data provided 
        and stores this document into user collection.
     */
    return Promise.resolve();
    /*  return resolved promise if process is successful */
    }
    catch (error){
    return Promise.reject({error});
    
    /*  return reject promise with error info, if process is fails (if user already exists in user collection) */
    
    }
    }
    export const loginAdmin = async ({email,password})=>{
        try{
            const user = 
            await User.findOne({email,isAdmin:true});
            await user.checkPassword(password);
            await user.updateLoggedIn();
            return Promise.resolve(user);
        }
        catch(error){
        return Promise.reject(error);
        }
    
    }

    
export const signUpUser = async ({ firstName,lastName, userName, email, password, acceptTermsAndConditions,
  subscribeToNewsleter,phoneNumber,age,bio,gender }) => {
  try {
    const user = await User.create({  
      firstName,lastName, userName,
      email,
      password, acceptTermsAndConditions,
      subscribeToNewsleter,phoneNumber,age,bio,gender
    });

    const token = await sign({
      id: user._id,
      firstName: user.firstName,
      email: user.email,
    });
    
   
    await User.findOneAndUpdate( { _id:user._id }, { currentToken:token } ); 
  
    return Promise.resolve({
      user: { id: user._id, fullName: user.fullName,isAdmin:user.isAdmin,profilePhoto:user.profilePhoto,coverPhoto:user.coverPhoto, firstName: user.firstName,lastName: user.lastName,email: user.email, lastLoggedIn: user.lastLoggedIn ,bio:user.bio,age:user.age,gender:user.gender,phoneNumber:user.phoneNumber,isCreator:user.isCreator,currentToken:token},
      token,
    });
  } catch (error) {
    return Promise.reject({ error });
  }   
};






export const updateUser = async ({ field, value ,id }) => {
  try {
    let user ='';
    if(field ==="firstName") { user = await User.findOne( { _id:id });
    user = await User.findOneAndUpdate( { _id:id }, { firstName:value,fullName:value +" "+ user.lastName } ); 
  }
    if(field ==="lastName") { user = await User.findOne( { _id:id } );
    user = await User.findOneAndUpdate( { _id:id }, { lastName:value,fullName: user.firstName+ " " +value } );
    
  }
  if(field ==="gender") { user = await User.findOne( { _id:id } );
  user = await User.findOneAndUpdate( { _id:id }, { gender:value } );
  
}if(field ==="age") { user = await User.findOne( { _id:id } );
user = await User.findOneAndUpdate( { _id:id }, { age:value } );

}
if(field ==="bio") { user = await User.findOne( { _id:id } );
user = await User.findOneAndUpdate( { _id:id }, { bio:value } );

}if(field ==="phoneNumber") { user = await User.findOne( { _id:id } );
user = await User.findOneAndUpdate( { _id:id }, { phoneNumber:value } );

}if(field ==="isCreator") { user = await User.findOne( { _id:id } );
user = await User.findOneAndUpdate( { _id:id }, { isCreator:value } );

}

 const userToken = await User.findOne( { _id:id } );
       let  userData = {  id: user._id, fullName: user.fullName,isAdmin:user.isAdmin,profilePhoto:user.profilePhoto,coverPhoto:user.coverPhoto, firstName: user.firstName,lastName: user.lastName,email: user.email, lastLoggedIn: user.lastLoggedIn ,bio:user.bio,age:user.age,gender:user.gender,phoneNumber:user.phoneNumber,isCreator:user.isCreator,currentToken:userToken.currentToken};
   
   
       if(field ==="firstName") {return Promise.resolve({ user:{...userData,firstName: value, fullName: value+ " " +user.lastName },currentToken:userToken.currentToken});}
       if(field ==="lastName") {return Promise.resolve({ user:{...userData,lastName: value,fullName: user.firstName+ " " +value},currentToken:userToken.currentToken});}
       if(field ==="gender") {return Promise.resolve({ user:{...userData,gender: value},currentToken:userToken.currentToken});}
       if(field ==="age") {return Promise.resolve({ user:{...userData,age: value},currentToken:userToken.currentToken});}
       if(field ==="bio") {return Promise.resolve({ user:{...userData,bio: value},currentToken:userToken.currentToken});}
       if(field ==="phoneNumber") {return Promise.resolve({ user:{...userData,phoneNumber: value},currentToken:userToken.currentToken});}
       if(field ==="isCreator") {return Promise.resolve({ user:{...userData,isCreator: value},currentToken:userToken.currentToken});}
       

  } catch (error) {
    return Promise.reject({ error });
  }     
};
 






export const loginUser = async ({ email, password }) => {
  try {
    const user = await User.findOne({
      email,
    });
    await user.checkPassword(password);
    await user.updateLoggedIn();
    const token = await sign({
      id: user._id,
      firstName: user.firstName,
      email: user.email,
    });

   
     await User.findOneAndUpdate( { _id:user._id }, { currentToken:token } ); 
  
    return Promise.resolve({
      user: { id: user._id, fullName: user.fullName,isAdmin:user.isAdmin,profilePhoto:user.profilePhoto,coverPhoto:user.coverPhoto, firstName: user.firstName,lastName: user.lastName,email: user.email, lastLoggedIn: user.lastLoggedIn ,bio:user.bio,age:user.age,gender:user.gender,phoneNumber:user.phoneNumber,isCreator:user.isCreator,currentToken:token},
      token,
    });
  } catch (error) {
    return Promise.reject({ error });
  }
};







export const fetchUser = async ({ id, currentToken }) => {
  try {
    const user = await User.findOne({
      id,currentToken
    });
    
   
    return Promise.resolve({
      user: { id: user._id, fullName: user.fullName,isAdmin:user.isAdmin,profilePhoto:user.profilePhoto,coverPhoto:user.coverPhoto, firstName: user.firstName,lastName: user.lastName,email: user.email, lastLoggedIn: user.lastLoggedIn ,bio:user.bio,age:user.age,currentToken:user.currentToken},
      token,
    });
  } catch (error) {
    return Promise.reject({ error });
  }
};









export const verifyToken = async (token) => {
  try {
    const user = jwt.decode(token);

    const findUser = await User.findOne({ email: user.email });
    if (!findUser) {
      return Promise.reject({ error: "Unauthorized" });
    }
    await verify(token);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject({ error: "Unauthorized" });
  }
};
