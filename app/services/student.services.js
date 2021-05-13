let studentList=[
    {
      "id":1,
      "fullName":"le thanh vinh",
      "age":18,
      "numberClass":11
    },
    {
      "id":2,
      "fullName":"le thanh truong",
      "age":17,
      "numberClass":11
    },
    {
      "id":3,
      "fullName":"le thanh truong",
      "age":15,
      "numberClass":9
    },
  ] 
const getStudentService=()=>{
    if(studentList){
        return studentList;
    }
    return false;
}
const getDetailStudentService=(id)=>{
    let index=studentList.findIndex((item)=>{
        return item.id==id;
    })
    if(index!=-1){
        student=studentList[index];
        return student;
    }else{
        return false;
    }
}
const createStudentListService=(student)=>{
    let newStudent = {
        ...student,
        id: Math.random(),
    };
    studentList = [...studentList, newStudent];
    return newStudent;
}
const updateStudentListService=(id,student)=>{
    let index = studentList.findIndex((item) => item.id == id);
    let { fullName, age, numberClass } = student;
    if (index != -1) {
        studentList[index] = { ...studentList[index], fullName, age, numberClass };
        return studentList[index];
    } else {
        return false
      }
}
const deleteStudentListService=(id)=>{
    let index = studentList.findIndex((item) => item.id == id);
    if (index != -1) {
        const deletedStudent = studentList[index];
        studentList.splice(index, 1);
        return deletedStudent;
    } else {
        return false;
    }

}
module.exports={
    getStudentService,
    getDetailStudentService,
    createStudentListService,
    updateStudentListService,
    deleteStudentListService,
}