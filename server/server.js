/**
 * Created by 若水 on 2017/8/31.
 */
let express = require('express');
let app = express();
let routers = require('./router/router');

let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let session=require('express-session');
let mongoStore=require('connect-mongo')(session);
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"db",
    store:new mongoStore({
        url:'mongodb://localhost:27017/MyTravel'
    })
}));

app.listen(3000, function () {
    console.log('3000 is success!');
});
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");//允许8080端口访问
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");//允许接受的头
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//允许接受的方法
    res.header('Access-Control-Allow-Credentials','true');//允许跨域设置cookie
    res.header("X-Powered-By",' 3.2.1');
    //如果发的是
    if(req.method=="OPTIONS") res.send('ok');/*让options请求快速返回*/
    else  next();
});

// 调用路由中间件
app.use(routers);

//db注册登录
let crypto=require('crypto');
let md5=(val)=>{
    return crypto.createHash('md5').update(val).digest('hex');
};

let User=require('./model');
//注册
app.post('/reg',function (req,res) {
    req.body.password=md5(req.body.password);
    User.findOne({username:req.body.username}).then(doc=>{
        if(doc){
            res.json({err:'该用户已存在'})
        }else{
            User.create(req.body).then(doc=>{
                req.session.user=doc;
                res.json(req.session.user);
            })
        }
    })
});

//验证是否登录过
app.get('/auth',function (req,res) {
    if(req.session.user){
        res.json(req.session.user);
    }else{
        res.json({});
    }
});

//登录
app.post('/login',function (req,res) {
    req.body.password=md5(req.body.password);
    User.findOne(req.body).then(data=>{
        if(data){
            req.session.user=data;
            res.json(req.session.user);
        }else{
            res.json({err:'用户或密码错误'})
        }
    })
});