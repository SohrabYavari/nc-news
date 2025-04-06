// lib imoports
import React, { useEffect, useState } from "react";

// svgs
import DateSvg from "../svgs/Date";
import Author from "../svgs/Author";
import Comment from "../svgs/Comment";
import Topic from "../svgs/Topic";
import Vote from "../svgs/Vote";
import Voted from "../svgs/Voted";

// comps and utils imports
import { updateArticleVotes } from "../../utils/api";

export default function ArticleDetails({ article }) {
  // states for article votes
  const [articleVote, setArticleVote] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    if (article) {
      setArticleVote(article.votes);
      setHasVoted(false);

      try {
        const votedArticles =
          JSON.parse(localStorage.getItem("votedArticles")) || [];
        if (votedArticles.includes(article.article_id)) {
          setHasVoted(true);
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error);
        alert("Issue loading previous votes.");
      }
    }
  }, [article]);

  if (article.votes === null) {
    article.votes = 0;
  }

  if (!article) return <p className="pt-20">Loading... </p>;

  // date formatted for human readability
  const formattedDate = new Date(article.created_at).toLocaleDateString(
    "en-UK",
    {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
  );

  const handleVote = async () => {
    if (hasVoted) return;

    try {
      const data = await updateArticleVotes(article.article_id, 1);
      setArticleVote(data.votes);
      setHasVoted(true);

      // Store vote in localStorage
      // will change to vote is stored based on user potentially?
      const votedArticles =
        JSON.parse(localStorage.getItem("votedArticles")) || [];
      votedArticles.push(article.article_id);
      localStorage.setItem("votedArticles", JSON.stringify(votedArticles));
    } catch (err) {
      console.error("Failed to update votes:", err);
    }
  };

  return (
    <section className="pt-2">
      <div className="flex flex-col w-full">
        <img
          src={article.article_img_url}
          alt={article.title}
          className="md:h-[500px] object-cover"
        />
        <h1 className="md:text-6xl text-4xl text-center py-5 md:w-[75%] mx-auto">
          {article.title}
        </h1>

        <div className="py-5 border-t-2 border-b-2 font-semibold">
          <div className="md:w-[75%] mx-auto">
            <div className="flex justify-between">
              <p className="flex gap-2 items-center">
                <DateSvg />
                {formattedDate}
              </p>
              <div className="flex justify-end gap-2">
                <p className="flex gap-2 items-center">
                  <Author />
                  {article.author} |
                </p>
                <p className="flex gap-2 items-center">
                  <Voted />
                  {articleVote}
                </p>
              </div>
            </div>
            <p className="flex gap-2 items-center justify-end">
              <Topic />
              {article.topic}
            </p>
          </div>
        </div>
        <p className="py-20 md:w-[75%] mx-auto text-2xl">{article.body}</p>

        <div className="md:w-[75%] mx-auto flex gap-5 items-center mb-10">
          <p className="flex gap-2">
            <Comment />
            {article.comment_count}
          </p>
          <button
            onClick={handleVote}
            disabled={hasVoted}
            className="btn btn-sm"
          >
            {hasVoted ? (
              <>
                <Voted /> Liked
              </>
            ) : (
              <>
                <Vote /> Like Article
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
