import React from "react";

export default function Skeleton() {
  return (
    <div className="animate-pulse flex flex-col items-center justify-center gap-4 w-full mt-11">
      <div className="h-4 bg-slate-400 w-96 rounded-md"></div>
      <div className="h-4 bg-slate-400 w-96 rounded-md"></div>
      <hr className="bg-slate-400 h-[2px]" />
      <div className="h-4 bg-slate-400 w-96 rounded-md"></div>
      <div className="h-4 bg-slate-400 w-96 rounded-md"></div>
      <hr className="bg-slate-400 h-[2px]" />
      <div className="h-4 bg-slate-400 w-96 rounded-md"></div>
      <div className="h-4 bg-slate-400 w-96 rounded-md"></div>
    </div>
  );
}
