let express = require('express');
let routers = require('./router/router');
let app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); //允许8080端口访问
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"); //允许接收的头
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); //允许的方法
    res.header('Access-Control-Allow-Credentials','true');
    // 允许跨域设置cookie
    //如果发的是options的请求 响应ok 即可
    if(req.method==="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});



// 调用路由中间件
app.use(routers);


app.get('*', function (req, res) {
	let host = req.host;
	let path = req.path;
	let query = req.query;
	let params = req.params;
	let method = req.method;
	res.json({host, path, query, params, method});
})

app.listen(3000, function () {
	console.log('3000 is success!')
});
