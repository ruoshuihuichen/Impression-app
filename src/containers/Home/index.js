import React,{Component} from 'react';
import ScrollList from "../../components/ScrollList/index";
import HotList from "../../components/HotList/index";
import SearchInp from "../../components/SearchInp/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home'
import './index.less'
import Swiper from "../../components/Swiper/index";
import LoadMore from "../../components/LoadMore/index";
import PullRefresh from "../../components/PullRefresh/index";

 class Home extends Component{
  componentDidMount(){
    if(this.props.home.swipers.length===0){
      this.props.getSwiper();
      this.props.getHot();
    }
    if(this.props.home.swipers.length>0){
      //将记录好的滚动条状态取出来赋给 content元素
      this.refs.scroll.scrollTop = JSON.parse(sessionStorage.getItem('homeLocation'));
      this.forceUpdate();
    }

  }
   componentWillUnmount(){ //组件将要销毁的时候 记住滚动条的位置
     // util.set('homeLocation',this.refs.scroll.scrollTop);
     sessionStorage.setItem('homeLocation',JSON.stringify(this.refs.scroll.scrollTop))
   }
   refresh=()=>{
     this.props.getHot();
   };
   loadMore=()=>{
     this.props.getHot();
     this.props.home.hot.isLoading='true';
   };
  render(){
    let {swipers} =this.props.home;
    let {hotList,hasMore,isLoading} =this.props.home.hot;
    return(
        <div >
          {/*头部*/}
          <SearchInp />
          {/*滚动区域*/}

          <div className="content" ref='scroll'>
            <ScrollList
                element={this.refs.scroll}
                isLoading={isLoading}
                hasMore={hasMore}
                loadMore={this.loadMore}>
              <PullRefresh refresh={this.refresh}>
              {/*轮播图*/}
              <Swiper swipers={swipers}/>
              {/**/}
              {/*最新*/}
              <HotList hotList={hotList}/>

              {/*加载更多*/}
              <LoadMore
                  isLoading={isLoading}
                  hasMore={hasMore}
                  loadMore={this.loadMore}/>
              </PullRefresh>
            </ScrollList >
          </div>

        </div>
    )
  }
}
export default connect(
    state=>({...state}),
    action
)(Home)
