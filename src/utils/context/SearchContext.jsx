import { createContext, useState } from "react";

export const SearchContext = createContext(null);

export default function SearchContextProvider(props) {
  const [searchResult, setSearchResult] = useState();
  return (
    <SearchContext.Provider value={{ searchResult, setSearchResult }}>
      {props.children}
    </SearchContext.Provider>
  );
}
