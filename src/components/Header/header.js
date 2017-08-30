/**
 * Created by 若水 on 2017/8/29.
 */
import React,{Component} from 'react';
import './header.less';
export default class Header extends Component{
    render(){
        return (
            <div className="login-header">
                <i className="iconfont icon-back"></i>
                {this.props.title}
            </div>
        )
    }
}
