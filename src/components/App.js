import React,{useEffect,useState}from 'react';
import '../App.css';
import ApplicationsList from './ApplicationsList.js'
import ApplicationForm from './ApplicationForm'
import TopBar from './TopBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,useNavigate ,Navigate} from "react-router-dom";

function App() {
  const [user,setUser]=useState({id : 1})

  useEffect(() => {
    fetch("http://localhost:9292/user?")
        .then((r) => r.json())
        .then((data) => setUser(data));
    }, []);

  return (
    <div className="App">
       <TopBar user={user}/>
       <Routes>
       <Route exact path="/" element={<ApplicationsList userId={parseInt(user.id)}/>}/>
       </Routes>  
    </div>
  );
}

export default App;
