/**
 * Created by 若水 on 2017/8/29.
 */
import React,{Component} from 'react';
import profile from '../../common/images/profile.png'
export default class Reg extends Component{
    render(){
        return (
            <div className="login-wrap">
                <div className="login-header">
                    <i className="iconfont icon-back"></i>
                    <span>注册</span>
                </div>
                <div className="content">
                    <img src={profile} width={'70px'} alt=""/>
                    <ul>
                        <li><input type="text" required placeholder="请输入用户名"/></li>
                        <li><input type="password" required placeholder="请输入密码" /></li>
                        <li><a className="login-btn" >注册</a></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}
