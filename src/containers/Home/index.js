import React,{Component} from 'react';
import Mheader from "../../components/Mheader/index";
import ScrollList from "../../components/ScrollList/index";
import ReactSwipe from 'react-swipe';
import NewList from "../../components/NewList/index";
import SearchInp from "../../components/SearchInp/index";
export default class Home extends Component{
  constructor(){
    super();
    this.state={
    }
  }
  toBlock=()=>{
    console.log(1);

    let style={
      position:"absolute",
      top:0,
      left:0,
      bottom:0,
      right:0,
      zIndex:20,
      backgroundColor:"#FFF"
    };

  };
  getSearch=(ele)=>{
    console.log(ele);
  }
  render(){
    // 列表页数据
    let newList=[
      {
        id:1,
        img:"http://img.chufaba.me/0820ae905e51ca0689fc7dfaabb5b39a.jpg!1600",
        text:"解锁青海两大名湖，照片百揽不如纵身一至"
      },
      {
        id:2,
        img:"http://img.chufaba.me/0820ae905e51ca0689fc7dfaabb5b39a.jpg!1600",
        text:"解锁青海两大名湖，照片百揽不如纵身一至"
      },
      {
        id:3,
        img:"http://img.chufaba.me/0820ae905e51ca0689fc7dfaabb5b39a.jpg!1600",
        text:"解锁青海两大名湖，照片百揽不如纵身一至"
      },
      {
        id:4,
        img:"http://img.chufaba.me/0820ae905e51ca0689fc7dfaabb5b39a.jpg!1600",
        text:"解锁青海两大名湖，照片百揽不如纵身一至"
      },
      {
        id:5,
        img:"http://img.chufaba.me/0820ae905e51ca0689fc7dfaabb5b39a.jpg!1600",
        text:"解锁青海两大名湖，照片百揽不如纵身一至"
      },
      {
        id:6,
        img:"http://img.chufaba.me/0820ae905e51ca0689fc7dfaabb5b39a.jpg!1600",
        text:"解锁青海两大名湖，照片百揽不如纵身一至"
      }
    ]
    // let newList=[]
    return(
        <div >
          {/*头部*/}
          <SearchInp
              getSearch={this.getSearch}
              onKeyDown={this.toBlock}/>
          {/*滚动区域*/}
          <ScrollList>
            {/*轮播图*/}
            <ReactSwipe
                className="carousel"
                swipeOptions={{
                  startSlide: 2,
                  speed: 400,
                  auto: 3000,
                  continuous: true,
                  stopPropagation: true
                }}>
              <div className="sliderList">
                <img src="http://img.chufaba.me/routes/2016/06/23/kr75295cryxvlilp.jpg!1600" alt=""/>
              </div>
              <div className="sliderList">
                <img src="http://img.chufaba.me/routes/2016/06/16/393l5x2ihjrjdpj8.jpg!1600" alt=""/>
              </div>
              <div className="sliderList">
                <img src="http://img.chufaba.me/routes/2014/09/22/0d2e0543b9a306e7.png!1600" alt=""/>
              </div>
            </ReactSwipe>
            {/*最新*/}
            <NewList newList={newList}/>
          </ScrollList >
        </div>
    )
  }
}
import './index.less'