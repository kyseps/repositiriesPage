import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { BsFilter } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { reposContext } from "../utils/context/ReposContext";
import { SearchContext } from "../utils/context/SearchContext";

export default function SearchBox() {
  const repos = useContext(reposContext) || [];
  const { setSearchResult } = useContext(SearchContext);

  const [inpValue, setInpValue] = useState("");

  function search(data) {
    const filteredResults = data.filter(
      (item) =>
        item.name.toLowerCase().includes(inpValue.toLowerCase()) ||
        item.language?.toLowerCase().includes(inpValue.toLowerCase())
    );
    setSearchResult(filteredResults);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inpValue.length === 0) {
        setSearchResult(null);
      }
      if (inpValue.length) {
        search(repos);
      }
    }, 1_000);

    return () => {
      clearTimeout(timeout);
    };
  }, [inpValue]);

  return (
    <section className="">
      <div className="flex gap-3 content-center pt-[32px] pr-[32px] pl-[24px] pb-3">
        <BsFilter className="w-[24px] h-[24px]" />
        <p className="text-[16px] font-semibold">Filter</p>
        <NavLink
          className="rounded-xl border border-solid border-gray-500 px-2"
          to="/"
        >
          All
        </NavLink>
        <NavLink
          className="rounded-xl border border-solid border-gray-500 px-2"
          to="publicRepos"
        >
          Public
        </NavLink>
        <NavLink
          className="rounded-xl border border-solid border-gray-500 px-2"
          to="privetRepos"
        >
          Privet
        </NavLink>
      </div>
      <div className="flex bg-[#eeeeee] py-2 px-3 items-center gap-3 rounded-lg">
        <FiSearch className="opacity-50" />
        <input
          value={inpValue}
          onChange={(e) => {
            setInpValue(e.target.value);
          }}
          placeholder="Search for repositories"
          className="bg-[#eeeeee] focus:outline-none w-full"
          type="search"
        />
      </div>
    </section>
  );
}
