import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import util from './common/util';
export default class PrivateRoute extends Component{
    render(){
        let {component:Component,...rest}=this.props;
        return(
            <div>
                <Route {...rest} render={(props)=>{
                    if(util.get('user').username){
                        return <Component {...props} />
                    }else{
                        return <Redirect to={'/login'}/>
                    }
                }}/>
            </div>
        )
    }
}




















