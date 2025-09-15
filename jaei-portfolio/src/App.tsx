import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./Styles/GlobalStyle";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
