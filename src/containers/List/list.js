/**
 * Created by Administrator on 2017/8/29 0029.
 */
import React from "react";
import Header from "../../components/Mheader/Header";
import "./list.less";

import {Link} from "react-router-dom";

export default class List extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <ul>
                <li className="list-wrapper">
                    <Link to="/detail">
                        <div className="list-header">
                            <img src="http://img.chufaba.me/poi_comment_75d474ae-b0df-42d6-a6dd-e6196ac9e66a.JPG" alt="头像"/>
                            <div className="header-context">
                                <h3>西安古城墙</h3>
                                <p>
                                    <span>西安</span>
                                    <span>中国</span>
                                </p>
                            </div>
                            <div className="header-right">
                            <span className="iconfont icon-favorite">
                        </span>
                                <span className="iconfont icon-edit">
                        </span>
                            </div>
                        </div>
                        <div className="list-body">
                            <img src="http://img.chufaba.me/poi_comment_75d474ae-b0df-42d6-a6dd-e6196ac9e66a.JPG" alt="图片"/>
                            <p>
                                晚上突然想过来，然后一个人就来了。没有自行车，路上下了点小雨，只逛了1/4就出来了。如果白天来逛，可能会感觉好一点吧。
                            </p>
                        </div>
                        <div className="list-footer">
                         <span className="iconfont icon-good">
                        </span>
                            <span className="iconfont icon-edit">
                        </span>
                        </div>
                    </Link>

                </li>
                {/*<li className="list-wrapper">

                        <div className="list-header">
                            <img src="http://img.chufaba.me/poi_comment_3a3ca44a-d14e-4766-a22f-77c717f0a3ec.jpg" alt="头像"/>
                            <div className="header-context">
                                <h3>石室圣心大教堂</h3>
                                <p>
                                    <span>广州</span>
                                    <span>中国</span>
                                </p>
                            </div>
                            <div className="header-right">
                            <span className="iconfont icon-favorite">
                        </span>
                                <span className="iconfont icon-edit">
                        </span>
                            </div>
                        </div>
                        <div className="list-body">
                            <img src="http://img.chufaba.me/poi_comment_3a3ca44a-d14e-4766-a22f-77c717f0a3ec.jpg" alt="图片"/>
                            <p>
                                从7月1日起，教堂内有人学习，只有周日开放。所以我很不幸运，只看到了外面。
                            </p>
                        </div>
                        <div className="list-footer">
                         <span className="iconfont icon-good">
                        </span>
                            <span className="iconfont icon-edit">
                        </span>
                        </div>
                </li>
                <li className="list-wrapper">

                        <div className="list-header">
                            <img src="http://img.chufaba.me/pc_329073_1503015985303588_1600_1200.jpg" alt="头像"/>
                            <div className="header-context">
                                <h3>蓝庙</h3>
                                <p>
                                    <span>清迈</span>
                                    <span>泰国</span>
                                </p>
                            </div>
                            <div className="header-right">
                            <span className="iconfont icon-favorite">
                        </span>
                                <span className="iconfont icon-edit">
                        </span>
                            </div>
                        </div>
                        <div className="list-body">
                            <img src="http://img.chufaba.me/pc_329073_1503015985303588_1600_1200.jpg" alt="图片"/>
                            <p>
                                之前就听说了清迈的蓝庙，和国内的感觉很不一样，跪坐在佛像前，微风袭来，伴着花香风铃声，让人心景怡静，很是舒服，席地而拜，修的金碧辉煌，色彩丰富。一共有三座主殿。
                            </p>
                        </div>
                        <div className="list-footer">
                         <span className="iconfont icon-good">
                        </span>
                            <span className="iconfont icon-edit">
                        </span>
                        </div>

                </li>
                <li className="list-wrapper">

                        <div className="list-header">
                            <img src="http://img.chufaba.me/poi_comment_7cc5e490-eabd-452e-a25b-5f9b3d072b9d.jpeg" alt="头像"/>
                            <div className="header-context">
                                <h3>九寨沟风景区</h3>
                                <p>
                                    <span>四川</span>
                                    <span>中国</span>
                                </p>
                            </div>
                            <div className="header-right">
                            <span className="iconfont icon-favorite">
                        </span>
                                <span className="iconfont icon-edit">
                        </span>
                            </div>
                        </div>
                        <div className="list-body">
                            <img src="http://img.chufaba.me/poi_comment_7cc5e490-eabd-452e-a25b-5f9b3d072b9d.jpeg" alt="图片"/>
                            <p>
                                远离尘嚣的一方天地。跳耀铺洒的天光，漫山遍野的绿意，彻净明通的湖面。一切都如梦同框而显。突异扭曲的树桠，竭力触碰倒影。蜿蜒波折的溪流，企望归于宁静。缄默不朽的沉木，无声展示亘古。这有两个世界，真实与虚妄同生同行。
                            </p>
                        </div>
                        <div className="list-footer">
                         <span className="iconfont icon-good">
                        </span>
                            <span className="iconfont icon-edit">
                        </span>
                        </div>
                </li>*/}
            </ul>


        )
    }
}
