/**
 * Created by Administrator on 2017/8/29 0029.
 */
import React,{Component} from 'react';
import "./detail.less"
import Header from "../../components/Header/header";

export default class Detail extends Component{
    render(){
        return (
            <div className="detail">
                <Header title="详情"/>
                <img src="http://img.chufaba.me/poi_comment_75d474ae-b0df-42d6-a6dd-e6196ac9e66a.JPG" alt=""/>
                <img src="http://img.chufaba.me/poi_comment_75d474ae-b0df-42d6-a6dd-e6196ac9e66a.JPG" alt=""/>
                <p>
                    <i>心情:</i>
                    从7月1日起，教堂内有人学习，只有周日开放。所以我很不幸运，只看到了外面</p>

            </div>
        )
    }
}
