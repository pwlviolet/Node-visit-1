const express = require('express');
//body-parser用来解析数据类型
const bodyparser = require('body-parser')
const cors = require('cors');  //引入cors模块处理跨域
//导入路由表
const loginrouter = require('./routers/character1')

//创建服务
const app = express();
// mongo(app)
app.use(express.static('res'))
app.use(cors())
//用来解析json和ur-lencoded格式的请求
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/test', loginrouter)
//监听端口
app.get('/',(req,res)=>{
    res.send('启动成功')
})
app.listen(8080,() => console.log('express serve running at port 8080!'))