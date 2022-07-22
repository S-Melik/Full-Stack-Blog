import React, { useEffect, useState } from "react";

function HomeLatestsPosts({articles}) {
    const [latestArticle, setLatestArticles] = useState([]);

    useEffect(() => {
        setLatestArticles(articles.slice(0, 5));
    }, [articles]);

    function renderArticlesPreviews() {
      return latestArticle.map((article) => {
         return <ArticlePreview article={article} key={article.id} /> 
      });
    }
    
    return (
    <>
        <h2>Lastest articles</h2>
        {renderArticlesPreviews()}
    </>
    );
}

export default HomeLatestsPosts;