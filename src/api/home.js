import {ajax} from './util1';

let url='http://localhost:3000';
//获取轮播图数据
export const getSwipers=()=>{
  return ajax({
    url:url+'/slider',
    method:'get',
  })
};
//获取hotList数据
export const getHots=()=>{
  return ajax({
    url:url+'/hot',
    method:'get'
  })
};