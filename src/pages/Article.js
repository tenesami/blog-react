import React from 'react';
import articleContent from './ArticleContent';
const Article = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name)

    if(!article) return <h1>Article Does not Exist!</h1>
    return (
        <>
        <h1>Welcome to the {article.title} my article!</h1>
        {article.content.map((para, key) => (
            <p>{para}</p>
        ))}
        </>
    );
    }

export default Article;