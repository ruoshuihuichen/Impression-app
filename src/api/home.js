import {get} from './utils';
//所有的接口的方法都加s
//最终 我们调用的是getSwipers的方法
let url = 'http://localhost:3000';
//获取轮播图
export const getSwipers = () =>{
    return get( url+'/swiper');
};
export const getHotLists =() =>{
    return get(`${url}/hotList`);
};
