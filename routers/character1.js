//生成路由表
const router =require('express').Router()
//引入fs模块
const fs=require('fs')
//读取访问人数
router.get('/fwrs',(req,res) => {
    // console.log(req)
    //同步读取  
    let result=fs.readFileSync( 'test.txt', 'utf8' )
      // console.log('执行顺序'),
      let result1=Number(result)+1
      console.log(result1)
      res.send(String(result1))

})
//写入访问人数到文件
router.post('/fwrsw',(req,res)=>{
   // console.log(req.body.rs)
   res.send('成功')
   xr=req.body.rs
            fs.writeFile('test.txt',xr,(error)=>{
            if(error)
            {
                return console.log(err+'写入失败')
            }
            // console.log(xr+'成功')
         })

})

module.exports =router
