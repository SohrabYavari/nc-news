// lib imports
import React, { useEffect, useState } from "react";

// comps and utils imports
import { getArticles } from "../../utils/api";
import ArticleList from "../articles/ArticleList";
import { BounceLoader } from "react-spinners";
import TopicsDropdown from "../topics/TopicsDropdown";

export default function ArticlesPage() {
  // useStates for articles
  const [ncArticles, setNcArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageTopic, setPageTopic] = useState("");

  // data fetching
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await getArticles(pageTopic);
        setNcArticles(articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, [pageTopic]);

  return (
    <section id="articles" className="pt-20">
      <TopicsDropdown setPageTopic={setPageTopic} />
      {loading ? (
        <div className="flex w-full h-screen justify-center items-center">
          <BounceLoader color="#167241" />
        </div>
      ) : (
        <ul className="pt-20 px-2 grid md:grid-cols-3 gap-10">
          <ArticleList articles={ncArticles} />
        </ul>
      )}
    </section>
  );
}
