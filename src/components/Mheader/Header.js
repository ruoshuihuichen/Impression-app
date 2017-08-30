/**
 * Created by Administrator on 2017/8/29 0029.
 */
import React from "react";
import ReactDOM from "react-dom";

import "./Header.less"

export default class Header extends React.Component{
    render(){
        return(
            <div className="myheader">
                {this.props.name}
            </div>
        )
    }
}