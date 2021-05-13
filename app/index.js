const express = require('express');
const app = express();
const router=require("./routers/index.router");
app.use(express.json());
//chỗ e fix là em để app.use(router) bên dưới app.use(express.json()); thay vì để trên thì nó chạy ổn nhưng e chưa hiểu flow của nó.em nghĩ là để
//app.use(express.json()); trong router thì hợp lí hơn tại nó gửi lên req lên router.nếu em viết app.use(express.json());
//lên trước thì có nghĩa là thăng router nó cũng dùng hàm app.use(express.json()); ạ
app.use(router);
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})