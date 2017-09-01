/**
 * Created by 若水 on 2017/8/29.
 */
import React,{Component} from 'react';
import profile from '../../common/images/profile.png';
import {Link} from 'react-router-dom';
import './profile.less';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';

 class Profile extends Component{
     componetnDidMount(){
         this.props.auth();
     }
    render(){
        return (
            <div className="profile">
                <div className="profile-top">
                    <img className="profile-img" src={profile} width={'80px'} alt=""/>
                    {
                        this.props.user.userInfo.username?<a className="login-btn">{this.props.user.userInfo.username}</a>:<Link className="login-btn" to={'/login'}>登录</Link>
                    }
                </div>
                <div className="profile-content">
                    <div className="collect">
                        <i className="iconfont icon-box"></i>
                        <span>我的收藏</span>
                        <i className="iconfont icon-more icon-right"></i>
                    </div>
                    <div className="set">
                        <i className="iconfont icon-set"></i>
                        <span>我的设置</span>
                        <i className="iconfont icon-more icon-right"></i>
                    </div>
                    <div className="take">
                        <i className="iconfont icon-favorites"></i>
                        <span>我的订阅</span>
                        <i className="iconfont icon-more icon-right"></i>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(state=>({...state}),action)(Profile);
