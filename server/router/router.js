let express = require('express');
let router = express.Router();

// 返回轮播图
let swiper = require('../mock/swiper');
router.get('/swiper', function(req, res){
	res.send({err_no: 0, body: swiper});
});

// 返回热门景点列表
let hotList = require('../mock/hotList');
router.get('/hotList', function(req, res){
	res.send({err_no: 0, body: hotList});
});

// 返回列表数据
let itemList = require('../mock/itemList');
router.get('/itemList', function(req, res){
	res.send({err_no: 0, body: itemList});
});

// 根据指定ID返回对应的数据
router.get('/detail', function(req, res){
	let id = req.query.id;
	let data = itemList.list.find((item, index)=>{
		return id == item.id
	})
	if(data){
		res.send({err_no: 0, body: data});
	}else{
		res.send({err_no: 1, body: [], msg: '未找到'});
	}

});

module.exports  = router;