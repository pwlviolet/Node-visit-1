//生成路由表
const router =require('express').Router()
//引入fs模块
const fs=require('fs')
//访问人数
router.get('/fwrs',async(req,res) => {
    // console.log(req)
    let result
    fs.readFile( 'test.txt', 'utf8', function(err, dataStr) {
        if(err){
          return console.log('文件读取失败：' + err.message);
        }
          
        console.log('文件读取成功！' + dataStr);
         result = Number(dataStr)+1
         console.log(result)
         

      })
      console.log(result)
      let a=String(result)
      res.send(result)
      console.log(a)
         fs.writeFile('test.txt',a,(error)=>{
            if(error)
            {
                return console.log(err+'写入失败')
            }
            console.log(result+'成功')
         })

})

module.exports =router