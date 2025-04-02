// lib imports
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// comps and utils imports
import {
  getArticleById,
  getArticles,
} from "../../utils/api";
import ArticleList from "../articles/ArticleList";
import Article from "../articles/Article";

export default function ArticlesPage() {
  // useStates for articles
  const [ncArticles, setNcArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Params and navigation
  const { article_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await getArticles();
        setNcArticles(articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (article_id) {
      const fetchSpecificArticle = async () => {
        try {
          const article = await getArticleById(article_id);
          setSelectedArticle(article);
        } catch (error) {
          console.error(error);
          navigate("/home/articles");
        }
      };
      fetchSpecificArticle();
    } else {
      setSelectedArticle(null);
    }
  }, [article_id, navigate]);

  const handleBackToList = () => {
    navigate("/home/articles");
  };

  return (
    <section id="articles">
      {selectedArticle ? (
        <>
          <button
            onClick={handleBackToList}
            className="mt-20 btn btn-wide btn-accent"
          >
            {`<---`} Back to Articles
          </button>
          <Article
            article={selectedArticle.article}
          />
        </>
      ) : (
        <ul className="pt-40 px-2 grid md:grid-cols-3 gap-10">
          <ArticleList articles={ncArticles} />
        </ul>
      )}
    </section>
  );
}
