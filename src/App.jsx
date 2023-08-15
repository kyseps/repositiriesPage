import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <>
      <Header />
      <div className="border-2 rounded-md border-[#cbcbcb] px-6 pb-2">
        <SearchBox />
        <Outlet />
      </div>
    </>
  );
}

export default App;
