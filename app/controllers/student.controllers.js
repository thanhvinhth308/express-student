const {getStudentService,getDetailStudentService,createStudentListService,updateStudentListService,deleteStudentListService} = require("../services/student.services");
const getStudentListController = (req, res) => {
  let studentList = getStudentService();
  if(studentList){
    res.send(studentList);
  }
  else{
    res.status(404).send("not found!");
  }
};
const getDetailStudentListController = (req, res) => {
  let id = req.params.id;
  let student = getDetailStudentService(id);
  if (student) {
    res.send(student);
  } else {
    res.status(404).send("not found!");
  }
};
const createStudentListController = (req, res) => {
  let student = req.body;
  console.log(student)
  let newStudent=createStudentListService(student);
  if(newStudent){
    res.status(201).send(newStudent);
  }
  else{
    res.status(404).send("not found!");
  }
};
const updateStudentListController = (req, res) => {
  const { id } = req.params;
  const newUpdateStudent = req.body;
  console.log(id);
  let newStudent=updateStudentListService(id,newUpdateStudent);
  console.log(newStudent);
  if (newStudent) {
    res.send(200).send(newStudent);
  } else {
    res.status(404).send("not found !!");
  }
};
const deleteStudentListController = (req, res) => {
  const { id } = req.params;
  let deletedStudent=deleteStudentListService(id);
  if (deletedStudent) {
    res.status(200).send(deletedStudent);
  } else {
    res.status(404).send("not found !!");
  }
};
module.exports = {
  getStudentListController,
  getDetailStudentListController,
  createStudentListController,
  updateStudentListController,
  deleteStudentListController,
};
