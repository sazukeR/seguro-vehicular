import { Routes, Route, Navigate } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage";
import { QuotePage } from "../pages/QuotePage";
import { ThanksPage } from "../pages/ThanksPage";
import { useAuthStore } from "../hooks/useAuthStore";
import { CheckingAuth } from "../components/CheckingAuth";

export const AppRouter = () => {
 const { status, checkAuth } = useAuthStore();

 checkAuth();

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
