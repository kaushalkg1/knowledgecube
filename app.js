import express from "express";
import session from "express-session";
import multer from "multer";
import path, { join } from "path";

import compression from "compression";
import home from "./routes/home";
import admin from "./routes/admin";
import api from "./routes/api";
import connectToDb from "./db";
import cors from 'cors' ;
const app = express();
const PORT = process.env.PORT?process.env.PORT:3002;
app.use(compression());

app.use("/assets", express.static(join(__dirname, "public")));
app.use(express.static(join(__dirname, "public", "client")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());   
app.use(
  "/admin", 
  session({
    name: "sessId",
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: app.get("env") === "production" ? true : false,
      httpOnly: true,
      maxAge: 18000000, // 5 hours
    },
  })
);


app.set("view engine", "pug");

app.use(cors());
 const storage = multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,"public/uploads")

  },filename:(req,file,cb)=>{
    cb(null , file.fieldname+"_"+Date.now()+file.originalname)
  }
})
const upload= multer({
  storage:storage
})
app.use("/admin", admin);
app.use("/api", api);
app.use("/", home);
app.post("/upload",upload.single("image"),(req,res)=>{
  console.log(req.file)
})

Promise.all([connectToDb()])
  .then(() =>
    app.listen(PORT, () => console.log(`knowledgeCube is smoking on ${PORT}`))
  )
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
