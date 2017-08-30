import React,{Component} from 'react';
export default class ScrollList extends Component{
  render(){
    return(
        <div className="scroll-list">
          {this.props.children}
        </div>
    )
  }
}
import './index.less'
