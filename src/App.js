// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {


  const [alert, setalert] = useState(null)

  const showalert =(message,type) =>{
    setalert ({
      msg:message,
      type :type
    }
    
    )
    setTimeout(() => {
      setalert(null);
  }, 1500);

  }


  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#5c656e';
      showalert("Dark mode has been enabled","success");
      document.title = 'TextFilter - Dark Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = '#e9ecef';
      showalert("Light mode has been enabled","success");
      document.title = 'TextFilter - Light Mode';
      
    }
  }
  const [mode, setmode] = useState('light');
  return (
    <>
    <Navbar title="TextUtils" about="about app" mode={mode} toggle={togglemode}/>
    <Alert alert={alert}/>

    </>
  );
}

export default App;
