import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgotpassword from "./Auth/Forgotpassword";

import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutCourses from "./Layout/LayoutCourses";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/" element={<LayoutDashboard/>}/>
        <Route path="/Courses" element={<LayoutCourses/>}/>

        <Route path="/forgotpassword" element={<Forgotpassword/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;