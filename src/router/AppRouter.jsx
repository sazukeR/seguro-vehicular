import { Routes, Route, Navigate } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage";
import { QuotePage } from "../pages/QuotePage";
import { ThanksPage } from "../pages/ThanksPage";
import { useAuthStore } from "../hooks/useAuthStore";
import { CheckingAuth } from "../components/CheckingAuth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/auth/authSlice";

export const AppRouter = () => {
 const { status } = useAuthStore();
 const dispatch = useDispatch();

 useEffect(() => {
  const checking = async () => {
   if (!localStorage.getItem("user_data")) return dispatch(logout());
   return dispatch(login(JSON.parse(localStorage.getItem("user_data"))));
  };
  checking();
 }, []);

 if (status === "checking") {
  return <CheckingAuth />;
 }

 return (
  <>
   <Routes>
    {status === "not-authenticated" ? (
     <>
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/*' element={<Navigate to='/auth' />} />
     </>
    ) : (
     <>
      <Route path='/quote' element={<QuotePage />} />
      <Route path='/*' element={<Navigate to='/quote' />} />
     </>
    )}

    <Route path='/thanks' element={<ThanksPage />} />
   </Routes>
  </>
 );
};
