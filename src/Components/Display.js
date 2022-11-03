import React, { useState, useEffect } from 'react'
import Records from './Records.json'
import EmpDetails from '../api/Employe'
import axios from 'axios';

const Display = () => {
  const [name,setName] = useState([]);
  useEffect(()=>{
    async function getAllEmpDetails (){
      const response = await axios.get("http://localhost:3006/empdata");
      console.log(response);
      setName(response.data.Name);
    }
    getAllEmpDetails();
  },[])
    // REtrive EMP
    /*const retrieveEmpDetails = async () => {
        const response = await EmpDetails.get("/Employe");
        return response.data;
    }

   /* useEffect(() => {
        const getAllEmpDetails = async () => {
            const allEmpDetails = await retrieveEmpDetails();
        if  (allEmpDetails) setEmploye(allEmpDetails);
    };
    getAllEmpDetails();
},[]);*/

  return (
    // <div>
    //   <div className='posts'>
    //     {
            
    //         Records && Records.map(post =>{
    //             return(
    //                 <div className='post.empid'>
    //                 <center>
    //                 <h5>{post.empid}</h5>
    //                 <p>{post.Name}</p>
    //                 <p>{post.Attributes.Exp.map(data =>{
    //                     return(
    //                         <div>
                             
    //                           <p>{data.Roles}</p>
    //                           <hr></hr>
    //                           <p>{data.Project}</p>

    //                         </div>
    //                     )
    //                 })}</p>
    //                 <p>{post.Attributes.Certificate.map(data =>{
    //                     return(
    //                         <>
    //                           <p>{data.CertificateName}</p>
                              
    //                           <p>{data.Provider}</p>
    //                         </>
    //                     )
    //                 })}</p>

    //                 </center>
    //                 </div>
    //             )
    //         })
    //     }
    //   </div>
    // </div>
    <div>
      Emp details
      <h2>
        {name}
      </h2>
    </div>
  )
}


export default Display;