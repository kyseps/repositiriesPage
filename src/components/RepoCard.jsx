import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { GrShare } from "react-icons/gr";
import { GoRepoForked, GoStar } from "react-icons/go";
import { FiGitPullRequest } from "react-icons/fi";

export default function RepoCard({
  name,
  forks,
  open_issues,
  language,
  updated_at,
  visibility,
  stars,
  id,
}) {
  const time = updated_at.slice(0, 10).split("-");
  return (
    <div className=" border-b-2 py-2 ">
      <div className="flex items-center gap-1 py-1 px-1">
        <p className="font-medium">{name}</p>
        <Link>
          <GrShare className="w-[10px] h-[10px]" />
        </Link>
        <p
          className={`bg-[#d9f0ff]  ${
            visibility === "public"
              ? "text-[#0099ff] bg-[#d9f0ff]"
              : "text-[#9835ff] bg-[#f0e1ff]"
          } rounded-xl px-1 font-medium text-sm`}
        >
          {visibility}
        </p>
      </div>
      <div className="flex items-center gap-5 py-1 px-1">
        <p className="text-xs font-medium">{language}</p>
        <div className="flex items-center">
          <GoStar />
          <p className="text-xs">12</p>
        </div>
        <div className="flex">
          <GoRepoForked />
          <p className="text-xs">{forks}</p>
        </div>
        <div className="flex">
          <FiGitPullRequest />
          <p className="text-xs">{open_issues}</p>
        </div>
        <p className="text-sm text-[#545454] opacity-60">
          Updated {formatDistanceToNow(new Date(time[0], time[1], time[2]))} ago
        </p>
      </div>
    </div>
  );
}
