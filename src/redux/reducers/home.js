import * as Types from '../action-types';
let initState={
  swipers:[],
  hot:{
    hasMore:true,
    hotList:[],
    isLoading:true
  }
};
export  default function (state=initState,action) {
  switch(action.type){
    case Types.GET_SWIPER:
      return {
          ...state,
        swipers:[...action.swipers]
      };
    case Types.GET_HOT:
      return {
        ...state,
        hot:{
          hasMore:action.hasMore,
          hotList:[...state.hot.hotList,...action.hotList],
          isLoading:false
        }
      }
  }
  return state;
}