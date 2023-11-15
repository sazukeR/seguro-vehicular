import { useDispatch, useSelector } from "react-redux";
import usersApi from "../api/usersApi";
import {
 checkingCredentials,
 clearErrorMessage,
 login,
 logout,
} from "../store/auth/authSlice";
import { useEffect } from "react";

export const useAuthStore = () => {
 const dispatch = useDispatch();
 const { status, user, errorMessage } = useSelector((state) => state.auth);

 const startLogin = async ({ placa }) => {
  dispatch(checkingCredentials());

  try {
   const { data } = await usersApi.get("/usuarios");

   const foundUser = data.find((user) => user.placa === placa);

   if (foundUser) {
    localStorage.setItem("user_data", JSON.stringify(foundUser));

    dispatch(
     login({
      uid: foundUser.id,
      email: foundUser.email,
      username: foundUser.username,
      placa: foundUser.placa,
      modelo: foundUser.modelo,
     })
    );

    console.log(`¡Bienvenid@, ${foundUser.username}!`);
   } else {
    throw new Error("El usuario no existe.");
   }
  } catch (error) {
   dispatch(logout("LA PLACA NO EXISTE"));

   setTimeout(() => {
    dispatch(clearErrorMessage());
   }, 20);

   console.log({ error: error.message });
  }
 };

 const startLogout = () => {
  localStorage.clear();
  dispatch(logout());
 };

 const checkAuth = () => {
  useEffect(() => {
   const checking = async () => {
    if (!localStorage.getItem("user_data")) return dispatch(logout());
    return dispatch(login(JSON.parse(localStorage.getItem("user_data"))));
   };
   checking();
  }, []);
 };

 return {
  // props

  status,
  user,
  errorMessage,

  // methods
  startLogin,
  startLogout,
  checkAuth,
 };
};
