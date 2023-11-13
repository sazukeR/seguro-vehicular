import "./App.css";
import { HeadLayout } from "./layouts/HeadLayout";
import { QuotePage } from "./pages/QuotePage";
// import { AuthPage } from './pages/AuthPage'

function App() {
 return (
  <HeadLayout>
   {/*   <AuthPage /> */}

   <QuotePage />
  </HeadLayout>
 );
}

export default App;
