import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import {Link,useNavigate} from 'react-router-dom';

function Home(){

    let history = useNavigate();
    const handleDelete = (id) =>{
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);
        history('/');

    }

    

    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped borderd hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Skills
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Skills}
                                        </td>
                                        <td>
                                            <Button onClick={() => alert(item.Name)}>Edit</Button>
                                            &nbsp;
                                            <button className="btn btn-danger"Click={() => handleDelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }):"No Record Found"
                        }
                    </tbody>

                </Table>
            </div>
        </Fragment>

    )
}

export default Home;