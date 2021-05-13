
const express=require("express");
const studentRouter=express.Router();
const {getStudentListController,getDetailStudentListController,createStudentListController,updateStudentListController,deleteStudentListController}=require("../controllers/student.controllers")
const {checkEmpty,checkNumberClass}=require("../middlewares/validations/student.validation")
///use(express.json()) nên xài cho file nào,tại sao e comment lại thì nó k chạy mà trong video e k thấy có hàm này
// studentRouter.use(express.json());

studentRouter.get('/students',getStudentListController);
studentRouter.get('/students/:id',getDetailStudentListController);
  
studentRouter.post('/students',checkEmpty,checkNumberClass,createStudentListController);
  
  //cap nhat
studentRouter.put('/students/:id',updateStudentListController);
  
  //delete
studentRouter.delete('/students/:id',deleteStudentListController);
module.exports=studentRouter;