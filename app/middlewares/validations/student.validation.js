const checkEmpty=(req,res,next)=>{
    const {fullName,age,numberClass}=req.body;
    if(fullName&& age &&numberClass){
        next();
    }
    else{
        res.status(505).send("khong duoc de trong");
    }
}
const checkNumberClass=(req,res,next)=>{
    const {numberClass}=req.body;
    if(numberClass>=1&&numberClass<=12){
        next();
    }else{
        res.status(505).send("numberclass phai tu 1 den 12")
    }
}
module.exports={
    checkEmpty,
    checkNumberClass,
}