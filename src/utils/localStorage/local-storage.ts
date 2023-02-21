import {AppRootStateType} from "../../redux/redux-store";

export const loadState=() =>{
    try{
        const initState=localStorage.getItem('state');
        if(initState===null){
            return undefined
        }
        return JSON.parse(initState);
    } catch (err){
        return undefined
    }
}

export const saveState=(state:AppRootStateType)=>{
    try{
        const initState=JSON.stringify(state);
        localStorage.setItem('state',initState)
    } catch (err){
        return undefined
    }
}
