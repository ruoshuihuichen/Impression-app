import React,{Component} from 'react';
import './index.less'
export default class LoadMore extends Component{
  loadMore=()=>{
    if(this.props.isLoading){//如果正在加载，返回
      return;
    }
    this.props.loadMore()
  };
  render(){
    return(
        <div
            onClick={this.loadMore}
            className="load-more">
          {this.props.hasMore?<span>加载更多...</span>:<span>就这么多了...</span>}
        </div>
    )
  }
}
