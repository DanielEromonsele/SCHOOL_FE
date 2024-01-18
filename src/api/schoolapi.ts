import axios from 'axios';


const URL: string = 'http://localhost:2244/api';

export const registerSchool = async(data: any) =>{
    try {
        return await axios.post(`${URL}/register-school`, data).then((res: any)=>{
            return res?.data
        })
    } catch (error) {
        return error
    }
}

export const loginSchool = async() =>{
    try {
        return await axios.get(`${URL}/login-school`).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        return error
    }
}

export const readSchoolCookie = async() =>{
    try {
        return await axios.get(`${URL}/read-school-cookie`).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        return error
    }
}

export const verifySchool = async(schoolID: string) =>{
    try {
        return await axios.get(`${URL}/verify-school/${schoolID}`).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        return error
    }
}


export const logout = async() =>{
    try {
        return await axios.delete(`${URL}/logout`).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        return error
    }
}