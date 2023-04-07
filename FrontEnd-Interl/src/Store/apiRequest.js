import axios from "axios";
import { toast } from "react-toastify";
import {
    createNewFailed, createNewStart, createNewSuccess,
    loginFailed, loginStart, loginSuccess,
    logoutFailed, logoutStart, logoutSuccess,
    registerFailed, registerStart, registerSuccess
} from "./MyReducer";
import { getAllUserFailed, getAllUserStart, getAllUserSuccess } from "./userSlice";



export const loginUser = async (user, dispatch, navigate) => {

    dispatch(loginStart());

    axios.post('http://localhost:3030/users/login', user)
        .then((response) => {
            // console.log(response.data.accessToken);
            localStorage.setItem('token', response.data.accessToken);
            navigate('/')
            dispatch(loginSuccess(response.data))
            // localStorage.setItem('isLoggedIn', 'true');
            toast.success('Login Success !')
        })
        .catch((error) => {
            dispatch(loginFailed())
            toast.error(error.response.data.message); // lấy message báo lỗi từ NestJS
        });
}
export const logoutUser = async (dispatch, navigate, id) => {
    dispatch(logoutStart());
    try {
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:3030/users/signout', id, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        dispatch(logoutSuccess());
        navigate('/login')
    } catch (error) {
        dispatch(logoutFailed());
        toast.error(error.response.data.message);
    }
};
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post('http://localhost:3030/users/register', user);
        dispatch(registerSuccess());
        navigate('/login')
        toast.success('Register Success !')
    } catch (err) {
        dispatch(registerFailed())
        toast.error(err.response.data.message);
    }
}

export const createNewUser = async (user, dispatch) => {
    dispatch(createNewStart());
    try {
        await axios.post('http://localhost:3030/users/register', user);
        dispatch(createNewSuccess);
        toast.success('Create new Success !')
    } catch (err) {
        dispatch(createNewFailed)
        toast.error(err.response.data.message);
    }
}

export const getAllUsers = async (allUsers, dispatch) => {
    dispatch(getAllUserStart());
    try {
        const res = await axios.get('http://localhost:3030/users', allUsers);
        dispatch(getAllUserSuccess(res.data));
    } catch (err) {
        dispatch(getAllUserFailed())
        toast.error(err.response.data.message);
    }
}
