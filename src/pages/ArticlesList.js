import React from 'react';
import articleContent from './ArticleContent';
import ArticleList from '../Components/ArticleList';
const ArticlesList = () => (
    <>
    <h1> Articles!</h1>
        <ArticleList articles={articleContent}/>
    </>
);

export default ArticlesList;