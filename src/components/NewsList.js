import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from 'lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-botton: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160'
// }

const NewsList = ({category}) => {
    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [loading, response, error] = usePromise(() => {
        // 이 함수가 usePromise의 promiseCreator 파라미터
        // return 결과가 resolved에 set 되는 것
        const query = category === 'all' ? '' : `&category=${category}`;
        const apiKey = process.env.REACT_APP_NEWS_API;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`,);            
    }, [category]); 
    // category가 변화하는 것  감지
    // category가 usePromise의 의존 배열 파라미터

    // 대기 중일 때
    if(loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    // 아직 response 값이 설정되지 않았을 때
    if(!response) {
        return null;
    }

    // 에러가 발생했을 때
    if(error) {
        return <NewsListBlock>에러 발생</NewsListBlock>;
    }
    
    // response 값이 유효할 때
    const {articles} = response.data;
    return (
        <NewsListBlock>
           {articles.map(article => (
            <NewsItem key={article.url} article={article}></NewsItem>
           ))}
        </NewsListBlock>
    );
}

export default NewsList;