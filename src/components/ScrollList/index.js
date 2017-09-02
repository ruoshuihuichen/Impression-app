import React,{Component} from 'react';
export default class ScrollList extends Component{
  constructor(){
    super();
    this.state={flag:false}
  }
  //等待接收的属性有element在绑定事件
  componentWillReceiveProps(nextProps){
    // console.log(nextProps);
    // Object {element: div.content, isLoading: false, hasMore: true, children: Array(3), loadMore: function}

    if(nextProps.element && !this.state.flag){//设置组件内的 flag 只绑定一次
      this.load=()=>{
        clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
          let {scrollTop,offsetHeight,scrollHeight}=nextProps.element;
          if(scrollTop+offsetHeight+30>scrollHeight && this.props.hasMore &&!this.props.isLoading){
            this.props.loadMore()
          }
        },50)
      };
      nextProps.element.addEventListener('scroll',this.load);
      this.setState({flag:true})//只绑定一次
    }
  }
  componentWillUnmount(){
    this.props.element.removeEventListener('scroll',this.load)
  }
  render(){
    return(
        <div className="scroll-list">
          {this.props.children}
        </div>
    )
  }
}
import './index.less'
