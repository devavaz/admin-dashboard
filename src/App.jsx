import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import "./style/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "../formSource";
import useDarkMode from "./darkMode";


function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add new user" />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add new product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default App;
