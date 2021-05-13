const express=require("express");
const indexRouter=express.Router();
const studentRouter=require("./student.router")
//them co indexrouter
// indexRouter.use(express.json());
// indexRouter.use("/studens",studentRouter);
// indexRouter.use("/",studentRouter);
indexRouter.use(studentRouter);
module.exports=indexRouter;