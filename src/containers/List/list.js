/**
 * Created by Administrator on 2017/8/29 0029.
 */
import React from "react";
import Header from "../../components/Header/header";
import "./list.less";
import '../../common/index.less';
import { getItemLists } from '../../api/list';

import {Link} from "react-router-dom";

export default class List extends React.Component {
    constructor() {
        super();
        this.state = {list: []};
    }

    componentDidMount () {
        getItemLists().then(res=>{
            if(res.err_no === 0){
                this.setState({list: res.body.list});
            }
        })
    }
    render() {
        return (
            <div className="list-wrap">
                <Header title="列表"/>
            <ul className="content">
                {
                    this.state.list.map((item, index)=>(
                        <li className="list-wrapper" key={item.id}>
                            <Link to="/detail">
                                <div className="list-header">
                                    <img src={item.url} alt="头像"/>
                                    <div className="header-context">
                                        <h3>{item.title}</h3>
                                        <p>
                                            <span>{item.city}</span>
                                            <span>{item.country}</span>
                                        </p>
                                    </div>
                                    <div className="header-right">
                            <span className="iconfont icon-favorite">
                        </span>
                                        <span className="iconfont icon-edit">
                        </span>
                                    </div>
                                </div>
                                <div className="list-body">
                                    <img src={item.url} alt="图片"/>

                                </div>
                                <p className="list-txt">
                                    {item.txt}
                                </p>
                                <div className="list-footer">
                         <span className="iconfont icon-good">
                        </span>
                                    <span className="iconfont icon-edit">
                        </span>
                                </div>
                            </Link>

                        </li>
                    ))
                }
            </ul>
            </div>

        )
    }
}
