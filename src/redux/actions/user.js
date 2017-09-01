/*db 登录 注册*/
import {regs,logins,auths} from '../../api/user';
import * as types from '../action-types';
import util from '../../common/util';
import {push} from 'react-router-redux';

export const reg=(userInfo)=>(dispatch)=>{
    regs(userInfo).then(data=>{
        if(data.err){
            dispatch({
                type:types.SET_ERROR,
                err:data.err
            })
        }else{
            util.set('user',data);
            dispatch({
                type:types.SET_USER_INFO,
                userInfo:data
            });
            dispatch(push('/profile'));
        }
    })
};

export const auth=()=>(dispatch)=>{
    auths().then(data=>{
        if(data.username){
            util.set('user',data);
            dispatch({
                type:types.SET_USER_INFO,
                userInfo:data
            })
        }else{

        }
    })
};

export const validate=()=>(dispatch)=>{
    auths().then(data=>{
        //debugger
        if(data.username){
            util.set('user',data);
            dispatch({
                type:types.SET_USER_INFO,
                userInfo:data
            });
            dispatch(push('/profile'));
        }
    })
};


//登录
export const login=(userInfo)=>(dispatch)=>{
    logins(userInfo).then(data=>{
        if(data.err){
            dispatch({
                type:types.SET_ERROR,
                err:data.err
            })
        }else{
            util.set('user',data);
            dispatch({
                type:types.SET_USER_INFO,
                userInfo:data
            });
            dispatch(push('/profile'));
        }
    })
};