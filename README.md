> ## 后台接口

### index页面接口
##### 返回参数列表
- 请求方式 GET
- 请求路径 /lessonList
- 是否需要参数  否
- 返回类型 json
- 返回数据类型
	hasMore: Boolean
	lessons: Array
```
返回数据实例
{
    hasMore:true,
    lessons:[
        {
            url:'http://www.fullstackjavascript.cn/images/vue.png',
            lesson:'Vue.js从理论精讲到项目实战课程',
            lessonId:111,
            price:'￥1000.00元'
        }
	]
}
```

### detail页面接口
##### 返回参数列表
- 请求方式 GET
- 请求路径 /detail
- 是否需要参数  是
- 参数实例 'id=1'
- 返回类型 json
- 返回数据类型
	lessonName: String
	url: String
	timer: String
	location: String
	long: String
	lessonId: Number
```
返回数据实例
{
        lessonName:'vue从理论到实战',
        url:'http://www.zhufengpeixun.cn/themes/jianmo2/images/wechat.png',
        timer:'2016-10-30',
        location:'珠峰',
        long:'21小时',
        lessonId:222,
}
```
