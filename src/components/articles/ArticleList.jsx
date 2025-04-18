import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../global/Card";

export default function ArticleList({ articles }) {
  const navigate = useNavigate();

  const handleClick = (articleId) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      navigate(`/nc-news/articles/${articleId}`);
    }, 300); 
  };

  if (!articles || articles.length === 0) {
    return <p className="text-center p-4">No articles available</p>;
  }

  return articles.map((article) => (
    <div key={article.article_id} onClick={() => handleClick(article.article_id)}>
      <Card
        img={article.article_img_url}
        title={article.title}
        topic={article.topic}
        author={article.author}
        created_at={article.created_at}
        votes={article.votes}
      />
    </div>
  ));
}
