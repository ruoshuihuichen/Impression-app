import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
export default class Swiper extends Component{
  constructor(){
    super();
    this.state={index:0}
  }
  render(){
    let opts={startSlide: 2,
      speed: 400,
      auto: 3000,
      continuous: true,
      stopPropagation: true,
      callback:(index)=>this.setState({index:index})
    };
    return(
        <div className="slider">
          {this.props.swipers && this.props.swipers.length>0

              ?<ReactSwipe
              className="carousel"
              swipeOptions={opts}>
                {
                  this.props.swipers.map((item,index)=>(
                      <div className="sliderList" key={index}>
                        <img src={item.src} alt={item.alt}/>
                      </div>
                  ))
                }
          </ReactSwipe>

          :<div className="loading">
                网不好，怪我咯。。。
              {/*<img src="src/common/images/loading.gif" alt="" />*/}
          </div>}
          <div className="dots">
            {this.props.swipers && this.props.swipers.map((item,index)=>(
                <span
                    key={index}
                    className={index==this.state.index?'active':''}>
                </span>
              ))}
          </div>
        </div>
    )
  }
}
import './index.less'