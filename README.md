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
	title: String
	url: String
	city: String
	country: String
	hasMore: Boolean
	listId: Number
	txt:String
```
返回数据实例
{
    hasMore:true,
    list:[
        {   id:1,
            url:'http://img.chufaba.me/poi_comment_3a3ca44a-d14e-4766-a22f-77c717f0a3ec.jpg',
            txt:'从7月1日起，教堂内有人学习，只有周日开放。所以我很不幸运，只看到了外面',
            title:"石室圣心大教堂",
            city:'广州',
            country:"中国"
        },
        {   id:2,
            url:'http://img.chufaba.me/poi_comment_75d474ae-b0df-42d6-a6dd-e6196ac9e66a.JPG',
            txt:'晚上突然想过来，然后一个人就来了。没有自行车，路上下了点小雨，只逛了1/4就出来了。如果白天来逛，可能会感觉好一点吧。',
            title:"西安古城墙",
            city:'西安',
            country:"中国"
        },
        {   id:3,
            url:'http://img.chufaba.me/pc_329073_1503015985303588_1600_1200.jpg',
            txt:'之前就听说了清迈的蓝庙，和国内的感觉很不一样，跪坐在佛像前，微风袭来，伴着花香风铃声，让人心景怡静，很是舒服，席地而拜，修的金碧辉煌，色彩丰富。一共有三座主殿。',
            title:"蓝庙",
            city:'清迈',
            country:"泰国"
        },
        {   id:4,
            url:'http://img.chufaba.me/poi_comment_7cc5e490-eabd-452e-a25b-5f9b3d072b9d.jpeg',
            txt:'远离尘嚣的一方天地。跳耀铺洒的天光，漫山遍野的绿意，彻净明通的湖面。一切都如梦同框而显。突异扭曲的树桠，竭力触碰倒影。蜿蜒波折的溪流，企望归于宁静。缄默不朽的沉木，无声展示亘古。这有两个世界，真实与虚妄同生同行。',
            title:"九寨沟风景区",
            city:'四川',
            country:"中国"
        },
    ]
}
```
