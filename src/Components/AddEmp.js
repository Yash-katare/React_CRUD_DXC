import React from "react";
import Header from './Header';



class AddEmp extends React.Component{
    state = {
       id:"",
       name:"",
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.id === ""  || this.state.name === "")
        {
            alert("All fields are mandetory");
            return;
        }
        this.props.addEmpHandler(this.state);
        // to clear the fields
        this.setState({id:"",name:""});
        
        
    }
    render(){
        return(
            
            <div>
                <Header/>
                <center>
                <h2>Add Employee</h2>
                <hr></hr>
                <form className="form" onSubmit ={this.add}>
                     <div className="field">
                        <label>ID</label>
                        <>&nbsp;</>
                        <input type="number" name="id" placeholder="EmpId" 
                        value={this.state.id}
                        onChange={(e) => this.setState({id:e.target.value})}></input>
                     </div>
                     <>&nbsp;</>
                     <div className="field">
                        <label>Name</label>
                        <>&nbsp;</>
                        <input type="text" name="name" placeholder="EmpName" 
                        value={this.state.name}
                        onChange={(e) => this.setState({name:e.target.value})}></input>
                     </div>
                     <>&nbsp;&nbsp;</>
                     <div className="container-fluid">
                        <button className="btn btn-outline-success" type="submit">Submit</button>  
                    </div>
                 
                </form>
                </center>
            </div>
            
        );
    }
}
export default AddEmp;