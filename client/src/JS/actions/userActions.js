import {
  USER_REGISTER,
  USER_LOGIN,
  LOAD_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
} from "../constant/actionTypes";
import axios from "axios";
import { toast } from "react-toastify";

const ToastError = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const ToastSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const registerUser = (formData) => async (dispatch) => {
  dispatch(loadUser());
  try {
    const result = await axios.post("/api/auth/register", formData);
    // console.log("result",result)
    dispatch({ type: USER_REGISTER, payload: result.data });
    ToastSuccess(result.data.msg);
  } catch (error) {
    console.log(error);
    const { errors } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => ToastError(err.msg));
    }
  }
};

export const loginUser = (formData) => async (dispatch) => {
  dispatch(loadUser());

  try {
    const result = await axios.post("/api/auth/login", formData);
    console.log("result", result);
    dispatch({ type: USER_LOGIN, payload: result.data });
    ToastSuccess(result.data.msg);
  } catch (error) {
    console.log(error);
    const { errors } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => ToastError(err.msg));
    }
  }
};

export const loadUser = () => (dispatch) => {
  dispatch({
    type: LOAD_USER,
  });
};

export const logoutUser = () => (dispatch) => {
  dispatch(loadUser());

  dispatch({
    type: LOGOUT_USER,
  });
};

export const getAuthUser = () => async (dispatch) => {
  dispatch(loadUser());
  try {
    //hearders
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const result = await axios.get("/api/auth/user", config);
    dispatch({ type: GET_AUTH_USER, payload: result.data }); ////get User from req.user  check userRoute
  } catch (error) {
    console.log(error);
  }
};
