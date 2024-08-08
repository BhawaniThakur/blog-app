import React, { useState, useEffect } from "react";
import Service from "../appwrite/config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, content }) {
  const [parsecontent, setParsecontent] = useState("");

  useEffect(() => {
    if (content !== null) {
      setParsecontent(parse(content));
    }
  }, [content]);

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <Link to ={`/post/${$id}`}>
      <img
        className="w-full h-auto rounded-t-xl"
        src={Service.getFilePreview(featuredImage)}
        alt={title}
        style={{ height: 250 }}
      />
      </Link>
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white text-center">{title}</h3>
        {/* <p className="mt-1 text-gray-500 dark:text-neutral-400">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> */}
        <Link
          className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        to={`/post/${$id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;

{
  /* <div classNameName="max-w-sm   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<Link to={`/post/${$id}`}>
  <img
    classNameName="rounded-t-lg"
    src={Service.getFilePreview(featuredImage)}
    alt={title}
    style={{ height: 250 }}
  />
</Link>

<div classNameName="p-5">
  <h5 classNameName="mb-2 text-2xl font-bold tracking-tight text-dark-900 dark:text-white">
    {title}
  </h5>
       
  <div classNameName="mb-3 font-normal text-gray-700 dark:text-gray-400">
    READ
  </div>
  <Link
    to={`/post/${$id}`}
    classNameName="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Read more
    <svg
      classNameName="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </Link>
</div>
</div> */
}
