import { useState } from 'react';
import NewsList from 'components/NewsList';
// import axios from 'axios';

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

const App = () => {
  return <NewsList />;
}

export default App;