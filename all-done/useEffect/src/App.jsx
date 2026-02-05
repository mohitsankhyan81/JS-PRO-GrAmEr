import {useEffect,useState} from 'react'
import UserList from './components/UserList.jsx'
const App=()=>{
  const [data,setdata]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      return res.json();
    })
    .then((resdata)=>{
      console.log(resdata);
      setdata(resdata);
    })
  },[])

  return (
    <>
      <UserList data={data}/>
    </>
  )
}

export default App;