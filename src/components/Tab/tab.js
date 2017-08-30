/**
 * Created by 若水 on 2017/8/29.
 */
import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../../common/index.less';
import './tab.less';

export default class Tab extends Component{
    render(){
        return (
            <nav className="footer">
                <NavLink to={'/'} exact activeClassName='selected'>
                    <i className="iconfont icon-shouye"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to={'/list'} activeClassName='selected'>
                    <i className="iconfont icon-liebiao"></i>
                    <span>列表</span>
                </NavLink>
                <NavLink to={'/profile'} activeClassName='selected'>
                    <i className="iconfont icon-account"></i>
                    <span>我的</span>
                </NavLink>
            </nav>
        )
    }
}
