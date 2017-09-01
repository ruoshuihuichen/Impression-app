import React,{Component} from 'react';
import './login.less';
import {Link} from 'react-router-dom';
import profile from '../../common/images/profile.png'
import Header from "../../components/Header/header";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';

class Login extends Component{
    constructor(){
        super();
        this.state={username:'',password:''}
    }
    componentWillMount(){
        this.props.validate();
    }
    login=()=>{
        this.props.login(this.state);
    };

    render(){
        return (
            <div className="login-wrap">
                <Header title="登录"/>
                <img src={profile} width={'70px'} alt=""/>
                <ul>
                    <li><input type="text" value={this.state.username} placeholder="请输入用户名"
                               onChange={(e)=>{
                                   this.setState({username:e.target.value})
                               }} /></li>
                    <li><input type="password" value={this.state.password} placeholder="请输入密码"
                               onChange={(e)=>{
                                    this.setState({password:e.target.value})
                                }} /></li>
                    <li><a className="login-btn" onClick={this.login} >登录</a></li>
                    <li><Link className="link-reg"  to={'/reg'}>注册</Link></li>
                    <li>{this.props.user.err}</li>
                </ul>

            </div>
        )
    }
}
export default connect(state=>({...state}),action)(Login);

