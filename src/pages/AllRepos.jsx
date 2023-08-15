import React, { useContext } from "react";
import RepoCard from "../components/RepoCard";
import { reposContext } from "../utils/context/ReposContext";
import { SearchContext } from "../utils/context/SearchContext";

export default function AllRepos() {
  const repos = useContext(reposContext) || [];
  const { searchResult } = useContext(SearchContext);
  return (
    <>
      {searchResult
        ? searchResult.map((repo) => {
            return (
              <RepoCard
                key={repo.id}
                id={repo.id}
                name={repo.name}
                forks={repo.forks}
                open_issues={repo.open_issues}
                language={repo.language}
                updated_at={repo.updated_at}
                visibility={repo.visibility}
              />
            );
          })
        : repos
        ? repos.map((repo) => {
            return (
              <RepoCard
                key={repo.id}
                id={repo.id}
                name={repo.name}
                forks={repo.forks}
                open_issues={repo.open_issues}
                language={repo.language}
                updated_at={repo.updated_at}
                visibility={repo.visibility}
              />
            );
          })
        : "Loading"}
    </>
  );
}
