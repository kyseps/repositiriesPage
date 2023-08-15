import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import PrivetRepos from "../../pages/PrivetRepos";
import PublicRepos from "../../pages/PublicRepos";
import AllRepos from "../../pages/AllRepos";
import ReposProvider from "../context/ReposContext";
import SearchContextProvider from "../context/SearchContext";

export const router = createBrowserRouter([
  {
    element: (
      <ReposProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </ReposProvider>
    ),
    children: [
      {
        path: "/",
        element: <AllRepos />,
      },
      {
        path: "privetRepos",
        element: <PrivetRepos />,
      },
      {
        path: "publicRepos",
        element: <PublicRepos />,
      },
    ],
  },
]);
