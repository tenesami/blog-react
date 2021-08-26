import React from 'react';
import articleContent from './ArticleContent';
import {Link} from 'react-router-dom';
const ArticleList = () => (
    <>
    <h1>Hello, Here is my Article list!</h1>

    {articleContent.map((article, key) => (
        <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
        
    ))}
   
    </>
);

export default ArticleList;