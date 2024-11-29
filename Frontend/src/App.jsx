// npm install @mui/material @emotion/react @emotion/styled

import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BlogItem from './Components/BlogItem';

function App() {
  const cntValue = Number(localStorage.getItem("totalValue")) || 0;
  const [pageValue, setPageValue] = useState(1);
  const [data, setData] = useState([]);

  const getBlogData = async (pageValue) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/data/?page=${pageValue}&limit=5`);
      setData(response.data.data); // Ensure your backend sends { data: blogData }
      localStorage.setItem('totalValue', response.data.value);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogData(pageValue);
  }, [pageValue]);

  return (
    <>
      <div className="main-box">
        {data && data.map((value) => (
          <BlogItem value={value} key={value?._id} />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          count={Math.max(1, Math.ceil(cntValue / 5))}
          onChange={(event, value) => setPageValue(value)}
          variant="outlined"
          color="primary"
        />
      </div>
    </>
  );
}

export default App;




// // npm install @mui/material @emotion/react @emotion/styled

// import Pagination from '@mui/material/Pagination'
// import { useState,useEffect } from 'react'
// import axios from 'axios'
// import './App.css'
// import BlogItem from './Components/BlogItem'

// function App() {
 
//       const cntValue=localStorage.getItem("totalValue")
//       const [pageValue,setPageValue]=useState(1)
//       const [data,setData]=useState([])

//       const getBlogData=async (pageValue)=>{
//          try{
//              const response=await axios.get(`http://localhost:3000/api/data/?page=${pageValue}&limit=5`)
//              setData(response.data.data) ;// set Backend  get route part -> res.send({data:blogData}) that s why response.data.data
//               localStorage.setItem('totalValue',response.data.value)
//              //  console.log(response.data)
//             }catch(err){
//           console.log(err)
//          }
//       }

//       useEffect(()=>{
//            getBlogData(pageValue)
//       },[pageValue])

//   return (
//     <>   
//         <div className='main-box'>

//            {
//               data && data.map((value)=>{
//                 <BlogItem value={value}  key={value?._id}/>
//               })
//            }
//         </div>
//        <div className='pagination'>
//        <Pagination count={Math.ceil(cntValue/5)} onChange={(event,value)=>setPageValue(value)} variant="outlined" color="primary" />
//        </div>
//     </>
//   )
// }

// export default App
