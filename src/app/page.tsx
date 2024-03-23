"use client"
import { useState } from "react";
import DiscussionForum from "./components/discussionForum/DiscussionForum";
import Stories from "./components/stories/Stories";


export default function Home() {
  const [page, setPage] = useState<string>("discussion")

  return (
    <>
      {/* ui for bigger screen */}
      < main className="w-full lg:justify-between hidden lg:flex">
        <div className="w-full flex flex-col ">
          <DiscussionForum />
        </div>
        <div className="w-full lg:w-1/2  hidden  lg:flex flex-col justify-start items-center lg:px-6">
          <div className="grid grid-col-1  gap-4 w-2/3 bg-white">
            <Stories />
          </div>
        </div>
      </main >

      {/* ui for smaller screen */}
      < main className="w-full h-screen flex justify-between lg:hidden ">
        <div className="w-full  flex flex-col">
          <div className="flex items-center lg:bg-transparent bg-indigo-950">
            <button onClick={() => setPage("discussion")} className="w-full lg:w-fit text-center bg-indigo-950 lg:bg-slate-200 py-4 lg:py-2  px-8 lg:text-start capitalize lg:uppercase text-sm lg:text-2xl font-bold text-white lg:text-red-400 lg:hidden"> discussion forum</button>
            <button onClick={() => setPage("stories")} className="lg:mt-1 w-full text-center lg:w-fit text-white bg-indigo-950  lg:bg-slate-200 py-4 lg:py-2 px-2 lg:text-start capitalize lg:uppercase text-sm font-bold lg:text-red-400 lg:hidden">market news</button>
          </div>
          <div className="grid gap-2 bg-white">
            {/* on smaller screen when user see click discussion button user will get discussion component, same for stories */}
            {page === "discussion" && <DiscussionForum />}
            {page === "stories" && <Stories />}
          </div>
        </div>

      </main >
    </>
  );
}
