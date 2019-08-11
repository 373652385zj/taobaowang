/**
 * author: JakyZhang
 * date: 20190603
 */
/**
 * npm:
 * express,jade,body-parser,consolidate,mysql,fs
 */
const express = require('express');
const jade = require('jade');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const mysql = require('mysql');
const fs = require('fs');

const server = express();
server.listen(8080);


// 保证静态文件可以使用
server.use(express.static('./www'))

// mysql数据
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '373652385',
    database: '20190603',
})

// consolidate引用
server.set('views engine', 'html')
server.set('views', 'www')
server.engine('html', consolidate.jade)

// 浏览器中操作数据库
server.use('/browsersetsql',(req,res) => {
    res.send('成功')
    var mysql_syntax = "insert into bodierdata(box_type,text_num,url,src) values "+req.query.str
    console.log(mysql_syntax)
    db.query(mysql_syntax,(err,data) => {
        if(err) {
            console.log("有错误哟兄嘚",err)
        }else {
            console.log(data)
        }
    })
})

// 编写数据接口
server.use('/shoptypedata',(req,res) => {
    var rql = Number(req.query.line)
    db.query('select * from shoptypedata where text_num in ('+rql+','+(rql+1)+','+(rql+2)+')',(err,shopdata) => {
        db.query("select * from shoptypedata where rmd_type='"+rql+"'",(err1,shopdata1) => {
            if(err) {
                return err
            }else {
                for(let i=0;i<shopdata1.length;i++) {
                    shopdata.push(shopdata1[i])
                }
                res.send(shopdata)
            }
        })
    })
})  
// 获取个人资料
server.use('/persondata',(req,res) => {
    var name = req.query.name
    db.query("select * from persondata where name='"+name+"'",(err,data) => {
        if(err) {
            return err
        }else {
            res.send(data)
        }
    })
})

server.use('/', (req, res) => {


    // 获取 页脚 数据
    db.query('select * from footerdata', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        // footerdata的数据
        var mysql_footerdata1 = {}, footerdata1_data = [],
            mysql_footerdata2 = {}, footerdata2_data = [],
            mysql_footerdata3 = {}, footerdata3_data = [],
            mysql_footerdata4 = {}, footerdata4_data = [],
            mysql_footerdata5 = {}, footerdata5_data = [],
            mysql_footerdata6 = {}, footerdata6_data = [],
            mysql_footerdata7 = {}, footerdata7_data = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].type == 1) {
                footerdata1_data.push(data[i])
            } else if (data[i].type == 2) {
                footerdata2_data.push(data[i])
            } else if (data[i].type == 3) {
                footerdata3_data.push(data[i])
            } else if (data[i].type == 4) {
                footerdata4_data.push(data[i])
            } else if (data[i].type == 5) {
                footerdata5_data.push(data[i])
            } else if (data[i].type == 6) {
                footerdata6_data.push(data[i])
            } else if (data[i].type == 7) {
                footerdata7_data.push(data[i])
            }
        }
        // footer 中各个数据的内容
        var footerdata1_img = [
            './image/safety.png',
            './image/help.png',
            './image/pay.png',
            './image/style.png'
        ]
        mysql_footerdata1.footerdata1_data = footerdata1_data
        mysql_footerdata1.footerdata1_img = footerdata1_img
        mysql_footerdata2.footerdata2_data = footerdata2_data
        mysql_footerdata3.footerdata3_data = footerdata3_data
        mysql_footerdata4.footerdata4_data = footerdata4_data
        mysql_footerdata5.footerdata5_data = footerdata5_data
        mysql_footerdata6.footerdata6_data = footerdata6_data
        mysql_footerdata7.footerdata7_data = footerdata7_data


        // 获取 页头 数据
        db.query('select * from headerdata', (header_err, header_data) => {
            if (header_err) {
                console.log(header_err)
                return
            }

            db.query('select * from bodierdata', (bodier_err, bodier_data) => {
                if (bodier_err) {
                    return bodier_err
                } else {
                    // 渲染并传数据给前端页面
                    var bodier_data1 = [],
                    bodier_data2 = [],
                    bodier_data3 = [],
                    bodier_data4 = [],
                    bodier_data7 = [],
                    bodier_data8 = [],
                    bodier_data9 = []
                    for(let i=0;i<bodier_data.length;i++) {
                        if(bodier_data[i].box_type == 1) {
                            bodier_data1.push(bodier_data[i])
                        }else if(bodier_data[i].box_type == 2) {
                            bodier_data2.push(bodier_data[i])
                        }else if(bodier_data[i].box_type == 3 && bodier_data[i].src != null) {
                            bodier_data3.push(bodier_data[i])
                        }else if(bodier_data[i].box_type == 4) {
                            bodier_data4.push(bodier_data[i])
                        }else if(bodier_data[i].box_type == 7) {
                            bodier_data7.push(bodier_data[i])
                        }else if(bodier_data[i].box_type == 8) {
                            bodier_data8.push(bodier_data[i])
                        }else if(bodier_data[i].box_type == 9) {
                            bodier_data9.push(bodier_data[i])
                        }
                    }
                    // console.log(bodier_data4)

                    

                    res.render('firstpage.jade', {
                        logopic4: './writeface.jpg',
                        //  将 页头 数据传到前端
                        searchdata: header_data,

                        //  将 页身 数据传到前端
                        bodierdata1: bodier_data1,
                        bodierdata2: bodier_data2,
                        bodierdata3: bodier_data3,
                        bodierdata4: bodier_data4,
                        bodierdata7: bodier_data7,
                        bodierdata8: bodier_data8,
                        bodierdata9: bodier_data9,

                        //  将 页尾 数据传到前端
                        footerdata1: mysql_footerdata1,
                        footerdata2: mysql_footerdata2,
                        footerdata3: mysql_footerdata3,
                        footerdata4: mysql_footerdata4,
                        footerdata5: mysql_footerdata5,
                        footerdata6: mysql_footerdata6,
                        footerdata7: mysql_footerdata7,

                    })
                    return bodier_data1
                }
            })


        })
    })


})



