/**
 * Created by 若水 on 2017/8/29.
 */
import React,{Component} from 'react';
import './header.less';
import {withRouter} from 'react-router-dom';
class Header extends Component{
    back=()=>{
        this.props.history.goBack();
    };
    render(){
        return (
            <div className="login-header">
                <i className="iconfont icon-back" onClick={this.back}></i>
                {this.props.title}
            </div>
        )
    }
}
export default withRouter(Header);
