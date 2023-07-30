import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const apiKey="6845ea766054fb2e36b16ce30c05c169";
  const [place,setPlace] = useState()
  const [temp,setTemp] = useState()
  function fetchApi(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKey}`)
    .then((res)=>{
      console.log(res);
      return res.json()})
    .then((x)=>{
      console.log(x);
      setTemp(x.main.temp)
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="App" style={{backgroundSize: 'cover',width:'100%',height:'100vh',
    backgroundRepeat: 'no-repeat',backgroundImage: "URL('/static/clouds-stars-sun-blue-background-childrens-vector-illustration-sky_153074-219.avif')"}}>
      <div>
        <input onChange={(e)=>setPlace(e.target.value)} style={{ padding: '20px', fontSize: '22px', marginTop: '10%', border: '3px solid orange',  }} placeHolder="Enter city"></input>
      </div>
      <button onClick={fetchApi} style={{marginTop:'20px',padding:'10px',border:'2px solid',cursor:'pointer',fontSize:'16px',}}>Get Weather details</button>
     {temp && <div style={{marginTop:'50px',fontSize:'50px',}}>
        {temp}
      </div>}
    </div>
  );
}

export default App;

