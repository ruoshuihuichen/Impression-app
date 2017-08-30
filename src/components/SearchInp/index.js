import React,{Component} from 'react';
export default class SearchInp extends Component{
  componentDidMount(){
    this.props.getSearch(this.refs.search)
  }

  render(){
    return(
          <div className="search" ref="search">
            <div className="search-inp">
              <i className="iconfont icon-search"></i>
              <input
                  type="text" placeholder="请输入..."/>
            </div>
          </div>
    )
  }
}
import './index.less'