import React, { useState, useContext } from "react";
import { postCommentOnArticle } from "../../utils/api";
import { UserContext } from "../contexts/UserContext";

// img imports
import Quotes from "../svgs/Quotes";

export default function CommentForm({ article }) {
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const user = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postCommentOnArticle(article.article_id, user.username, body);
      setBody("");
    } catch (err) {
      console.error("Error: ", err);
      setError("Failed to post comment. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col py-5 md:w-[75%] mx-auto">
      <fieldset className="px-2 flex flex-col w-full relative ">
      <div className="rotate-y-180 absolute">
          <Quotes />
        </div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="max-w-full border pt-5 mt-5 rounded-sm"
        />
        
        <div className="w-full flex justify-end rotate-x-180">
          <Quotes />
        </div>
      </fieldset>


      {error && <p>{error}</p>}
      <button type="submit" className="btn btn-accent m-2">
        Post Comment
      </button>
    </form>
  );
}
