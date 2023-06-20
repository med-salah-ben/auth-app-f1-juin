import { GET_AUTH_USER , LOAD_USER, LOGOUT_USER, USER_LOGIN ,USER_REGISTER } from "../constant/actionTypes";

const initialState={
    isAuth : false,
    loadUser:false,
    user:{}
}


export const userReducer = (state=initialState , {type , payload})=>{
    switch (type) {
        case USER_REGISTER:
        case USER_LOGIN:
            localStorage.setItem("token",payload.Token)
            return {...state , isAuth:true , loadUser :false , user:payload.user}
        case LOAD_USER : 
            return {...state , loadUser:true } 
        case LOGOUT_USER :
            localStorage.removeItem("token")
            return {...state , loadUser:false ,isAuth:false , user:null }
        case GET_AUTH_USER:
            return{
                ...state , loadUser:false , isAuth:true , ...payload
            }
        default:
            return state;
    }
}