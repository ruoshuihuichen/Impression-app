/**
 * Created by 若水 on 2017/8/29.
 */
import React,{Component} from 'react';
import './reg.less';
import profile from '../../common/images/profile.png'
import Header from "../../components/Header/header";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';

class Reg extends Component{
    reg=()=>{
        this.props.reg({username:this.username.value,password:this.password.value})
    };
    render(){
        return (
            <div className="login-wrap">
                <div>
                    <Header title="注册"/>
                </div>

                <img src={profile} width={'70px'} alt=""/>
                <ul>
                    <li><input type="text" ref={(element)=>{
                        this.username=element;
                    }} required placeholder="请输入用户名"/></li>
                    <li><input type="password" ref={(element)=>{
                        this.password=element;
                    }} required placeholder="请输入密码" /></li>
                    <li><a className="login-btn" onClick={this.reg}>注册</a></li>
                    <li>{this.props.user.err}</li>
                </ul>
            </div>
        )
    }
}
export default connect(state=>({...state}),action)(Reg);