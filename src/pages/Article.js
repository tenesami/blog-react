import React from 'react';
import articleContent from './ArticleContent';
import ArticleList from '../Components/ArticleList';
import NotFound from './NotFound';

const Article = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name)

    if(!article) return <NotFound />

    //create other related articles under each article 
    const otherArticles = articleContent.filter(article => article.name !== name);
    return (
        <>
        <h1>Welcome to the {article.title} my article!</h1>
        {article.content.map((para, key) => (
            <p>{para}</p>
        ))}

        <h3>Other Aricles: </h3>
        <ArticleList articles={otherArticles}/>
        </>
    );
    }

export default Article;