import './App.css';
import React,{useState, useEffect} from 'react';
import Home from './Components/Home';
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import AddEmp from './Components/AddEmp';
import Header from './Components/Header';
import Display from './Components/Display';
import Employe from './api/Employe';
import axios from 'axios';
import Search from './Components/Search';
//import {uuid} from 'uuidv4';


function App() {
  const LOCAL_STORAGE_KEY ="employee";
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    retrieveEmp();
  },[]);

  // retrieve emp axios
  const retrieveEmp = async () => {
    // const response = await Employe.get("/Employe");
    // return response.data;
    return await axios
    .get("http://localhost:3006/empdata")
    .then((response) => setEmployee(response.employee))
    .catch((err) => console.log(err));
  }

  //console.log(employee)
  const addEmpHandler = (emp) => {
    console.log(emp);
    setEmployee([...employee,emp]);
  };

  useEffect ( ()=>
  {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employee));
  },[employee]);

  useEffect ( ()=>
  {
    // const retrieveEmpdetails= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveEmpdetails)
    // {
    //   setEmployee(retrieveEmpdetails);
    // }
    const getAllEmp = async () => {
      const allEmp = await retrieveEmp();
      if(allEmp) setEmployee(allEmp);

      getAllEmp();
    }
  },[]);

  return (
  
    //<Header/>
    // <div clasName='App'>
    //   <Router>
    //   <Routes>
        
    //     <Route path='/' element={<AddEmp/>}/>
        
    //   </Routes>
        
    //   </Router>

    // </div>
    <div>
      
      {/* <AddEmp addEmpHandler = {addEmpHandler} /> */}
      {/* <Search/> */}
      <Display/>
      {/* <Display retrieveEmpdetails = {employee} /> */}
    </div>

  );
}

export default App;
