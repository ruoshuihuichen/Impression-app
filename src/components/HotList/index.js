import React,{Component} from 'react';
import './index.less'
export default class HotList extends Component{
  render(){
    return(
        <div className="hot">
          <h2><i className="iconfont icon-good"></i>Hot</h2>
            {this.props.hotList&&this.props.hotList.length>0
                ?this.props.hotList.map((item,index)=>{
                  return(
                      <div key={index} className="hot-list">
                        <img src={item.img} alt=""/>
                        <p>{item.text}</p>
                      </div>
                  )
                })
                :<div className="loading">
                  <img src="src/common/images/loading.gif" alt="" />
                </div>
            }

        </div>
    )
  }
}
