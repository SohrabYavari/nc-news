import React, { useContext, useState } from "react";
import DeleteCommentButton from "./DeleteCommentButton";
import { UserContext } from "../contexts/UserContext";
import Quotes from "../svgs/Quotes";

export default function ArticleComment({ comment }) {
  const [deleted, setDeleted] = useState(false);
  const user = useContext(UserContext);

  const formattedDate = new Date(comment.created_at).toLocaleDateString(
    "en-UK",
    {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
  );

  return deleted ? (
    <></>
  ) : (
    <div className="my-5 p-1 relative border-b md:w-[75%] mx-auto">
      <p>
        {comment.author} <span className="font-thin italic"> said </span>
      </p>
      <div>
        <div className="rotate-y-180 absolute">
          <Quotes />
        </div>
        <p className="px-1 italic pt-5">{comment.body}</p>
        <div className="w-full flex justify-end rotate-x-180">
          <Quotes />
        </div>
      </div>
      <div className="flex justify-between">
        <p>
          <span className="font-thin italic"> on </span>
          {formattedDate}
        </p>
        <p>votes: {comment.votes}</p>
      </div>
      {user?.username === comment.author && (
        <DeleteCommentButton setDeleted={setDeleted} comment={comment} />
      )}
    </div>
  );
}
