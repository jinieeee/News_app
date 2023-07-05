import { Route, Routes } from "react-router-dom";
import NewsPage from 'pages/NewsPage';

// import { useState, useCallback } from 'react';
// import NewsList from 'components/NewsList';
// import Categories from 'components/Categories';
// import axios from 'axios';

// 첫 번째, 비동기로 news api 호출
// const App = () => {
//   const [data, setData] = useState(null); // data 초기값 null
//   const onClick = async () => {
//     const apiKey=process.env.REACT_APP_NEWS_API;
//     try {
//       const response = await 
//         axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=' + apiKey).then(response => {
//         setData(response.data);
//       }); 
      
//       // 1. axios 비동기 후 callback 함수 실행
//       // 2. async / await 적용
//       // 3. news-api 사용 : https://newsapi.org/
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
//     </div>
//   );
// };
// export default App;


// 두 번째, newsList, newsItem js 만들고 호출
// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => setCategory(category), []);

//   return (
//     <>
//       <Categories category={category} onSelect={onSelect}/>
//       <NewsList category={category}/>
//     </>
//   )
// };
// export default App;


// 세 번째, react-router-dom 활용해서 화면 구성
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}
export default App;