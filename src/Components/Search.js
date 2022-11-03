import React from "react";
import Header from "./Header";




const Search = () => {
  

  return (
   
    <div>
      <Header/>
      <button className="btn btn-success ">Add</button>
      <form className="d-flex" role="search">
        <input className="form-control me-2 text-center"  placeholder="Employee ID" 
        aria-label="Search" input type="tel" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    
    
  )
}

export default Search
