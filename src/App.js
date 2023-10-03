import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

// tThis is the main file which shows how your app works
function App() {
    const[alert,setAlert] = useState(null);

    const showAlert = (message,type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }

    const [mode,setMode] = useState('light');
    const toggleMode = ()=>{
      if(mode ==='light'){
        setMode('dark');
        document.body.style.backgroundColor = '#1a2c60';
        showAlert("dark mode is enabled","success")
        document.title = 'TextUtils - Dark Mode';
        // setInterval(() => {
        //   document.title = "Intall TextUtils Now!!!";
        // },2000);
        // setInterval(() => {
        //   document.title = "Intall TextUtils is Amazing!!!";
        // },1500);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode is enabled","success")
        document.title = 'TextUtils - Light Mode'
      }
    }
  return ( // this only returns one tag
     // <>----> this is a jsx fragment
     <>
     {/* props are basilly variable inisde  components that we want to change time to timme */}
     {/* this will crete our whole navbar suppose we want to our websites name for multiple websites and use it and we cna use props-properties  */}
    {/* <Router> */}
    <Navbar title ="TextUtils" mode = {mode} toggleMode = {toggleMode} about ="About" />
    <Alert alert = {alert}/>
    <div className="container my-3"> 
    <Textarea showAlert = {showAlert} headline = "Enter the text to analyze"/>
    {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Textarea showAlert = {showAlert} headline = "Enter the text to analyze"/>}/>

    </Routes> */}
    
    {/* <About/> */}
    </div>
    {/* </Router> */}
     </>
  );
}

export default App;
