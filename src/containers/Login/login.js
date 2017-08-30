import React,{Component} from 'react';
import './login.less';
import {Link} from 'react-router-dom';
import profile from '../../common/images/profile.png'
import Header from "../../components/Header/header";
export default class Login extends Component{
    render(){
        return (
            <div className="login-wrap">
                {/*<div className="login-header">
                    <i className="iconfont icon-back"></i>
                    <span>登录</span>
                </div>*/}
                <Header title="登录"/>
                <div className="content">
                    <img src={profile} width={'70px'} alt=""/>
                    <ul>
                        <li><input type="text" placeholder="请输入用户名"/></li>
                        <li><input type="password" placeholder="请输入密码" /></li>
                        <li><a className="login-btn" >登录</a></li>
                        <li><Link className="link-reg" to={'/reg'}>注册</Link></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

