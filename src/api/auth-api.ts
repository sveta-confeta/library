import axios from "axios";
import {InitRegType} from "../pages/registration/registration";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://strapi.cleverland.by/api/',
    // Authorization:`Bearer ${jwt}`,
})

// export const setAuthToken = (token:string) => {
//     if (token) {
// //применение токена
//         instance.defaults.headers.common['Authorization'] = token;
//     } else {
// // удаление токена из заголовка
//         delete instance.defaults.headers.common['Authorization'];
//     }
// }


export const authApi = {
    registrUser(data: InitRegType) {
        return instance.post<RegistrUserType>(`auth/local/register`,data)
    },
    authUser(data:AuthType){
        return instance.post<RegistrUserType>(`auth/local`)
    },
    logoutPassword(data:logoutType){
        return instance.post<LogoutReturnType>(`auth/forgot-password`)
    },
    forgotPassword(data: forgotType){
        return instance.post<RegistrUserType>(`auth/reset-password`)
   }

}
export type AuthUserType = {
    id: number
    username: string,
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
    firstName: string
    lastName: string
    phone: string
}
export type AuthType={
    identifier:string
    password:string

}
export type logoutType={
    email:string
}
export type LogoutReturnType={
    ok:boolean
}
export type forgotType= {
    password:string
    passwordConfirmation:string
    code:string
}



export type RegistrUserType = {
    jwt: string
    user: AuthUserType
}

export type ErrorType = {
    data: null
    error: {
        status: number
        name: string
        message: string
        details: {}
    }
}




