import React,{Component} from 'react';
export default class Mheader extends Component{
  render(){
    return(
        <div className="my-header">
          <div>{this.props.title}</div>
        </div>
    )
  }
}
import './index.less'