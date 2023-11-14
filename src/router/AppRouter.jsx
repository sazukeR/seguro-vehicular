import { Routes, Route, Navigate } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage";
import { QuotePage } from "../pages/QuotePage";
import { ThanksPage } from "../pages/ThanksPage";

export const AppRouter = () => {
 return (
  <>
   <Routes>
    <Route path='/auth' element={<AuthPage />} />

    <Route path='/quote' element={<QuotePage />} />

    <Route path='/thanks' element={<ThanksPage />} />

    <Route path='/' element={<Navigate to='/auth' />} />
   </Routes>
  </>
 );
};
