import React from "react";


export async function getServerSideProps() {
  // get articles from our api
/* 
  const res = await fetch("http://localhost:4000/articles");
  const articles = await res.json();

  return { props: { articles } };
}
*/
const [articlesRes, categoriesRes] = await Promise.all([
  fetch("http://localhost:4000/articles"),
  fetch("http://localhost:4000/categories")
]);

const [articles, categories] = await Promise.all([
  articlesRes.json(),
  categoriesRes.json()
]);

return { props: {articles, categories}};
}



export default function Home({ articles, categories }) {
  return (
    /*<div>
      <main>
        {articles.map(article => (
          <Link href={`articles/${article.id}`}>
             <a key={article.id}>
                <h3>{article.title}</h3>
             </a>
          </Link>
        ))}    
      </main>
    </div> */

    <div>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Fullstack Blog</title>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <header>
    <h1>Nodejs Blog</h1>
  </header>
  <div className="row">
    <div className="left-column">

      <div className="card">
        <h3>Recent posts</h3>
      </div>

      {articles.map(article => (
      <div className="card">
        <h2>{article.title}</h2>
        <h5>{article.createdAt}</h5>
        <img src="img/blog1.jpg" alt="blog " />
        <p>
          {article.content}
        </p>
      </div>
        ))}  

    </div>

    <div className="right-column">
      <div className="card">
        <h3>Categories</h3>
      </div>

      {categories.map(category => (
      <div className="card">
        <h3>{category.cate}</h3>
      </div>
      ))} 

    </div>
  </div>
</div>


  )
}

