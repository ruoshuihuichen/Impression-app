//获取  轮播图 数据
import * as Types from '../action-types';
import {getSwipers,getHots} from '../../api/home';
export const getSwiper=()=>(dispatch)=>{
  setTimeout(()=>{
    getSwipers().then(swipers=>{
      dispatch({
        type:Types.GET_SWIPER,
        swipers
      })
    })
  },1000)
};
export const getHot=()=>(dispatch)=>{
  setTimeout(()=>{
    getHots().then(hot=>{
      dispatch({
        type:Types.GET_HOT,
          ...hot
      })
    })
  },1000)
};