import React,{Component} from 'react';
import './index.less'
export default class NewList extends Component{
  render(){
    return(
        <div className="hot-title">
          <h2>
            <i className="iconfont icon-good"></i>
            Hot</h2>

            {this.props.newList.length>0
                ?this.props.newList.map((item,index)=>(
                <div key={item.id} className="hot-list">
                  <img src={item.img} alt=""/>
                  <p>{item.text}</p>
                </div>
            ))
                :<div className="loading">
                  <img src="src/common/img/loading.gif" alt="" />
                </div>
            }

        </div>
    )
  }
}
