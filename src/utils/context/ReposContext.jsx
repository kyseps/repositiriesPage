import { createContext, useEffect, useState } from "react";
import { myFetch } from "../axios/axios";

export const reposContext = createContext();

export default function ReposProvider({ children }) {
  const [repos, setRepos] = useState();
  async function getRepos() {
    const { data } = await myFetch.get();
    setRepos(data);
  }

  useEffect(() => {
    try {
      getRepos();
    } catch {
      return "Seems like you live in iran. try connecting your vpn";
    }
  }, []);

  return (
    <reposContext.Provider value={repos}>{children}</reposContext.Provider>
  );
}
