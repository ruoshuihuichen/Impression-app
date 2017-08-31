import {get} from './utils';

let url = 'http://localhost:3000';
//获取轮播图
export const getItemLists = () =>{
    return get( url+'/itemList');
};
export const getDetail =(data) =>{
    return get(`${url}/detail`, data);
};
