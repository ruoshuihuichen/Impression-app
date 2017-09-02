import React,{Component} from 'react';
import ReactPullToRefresh from 'react-pull-to-refresh';
export default class PullRefresh extends Component{
  constructor(){
    super();
  }
  render(){
    let style={
      backgroundColor:'#eee',
      marginBottom5:'5px',
      marginTop:'-20px'};
    return(
        <div>
          <ReactPullToRefresh
              onRefresh={this.props.refresh}
              className="your-own-class-if-you-want"
              style={{
                textAlign: 'center'
              }}>
            <div style={style}>下拉刷新...</div>
            <div>{this.props.children}</div>
          </ReactPullToRefresh>
        </div>
    )
  }
}
