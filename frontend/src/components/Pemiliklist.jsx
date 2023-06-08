import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Pemiliklist = () => {
    const [pemilik, setPemilik] = useState ([]);

    useEffect(()=>{
        getPemilik();
    }, []);

    const getPemilik = async ()=>{
        const response = await axios.get("http://localhost:5000/users");
        setPemilik(response.data);
    };

    const deletePemilik = async(pemilikId) =>{
        await axios.delete(`http://localhost:5000/users/${pemilikId}`);
        getPemilik();
    };

  return (
    <div>
        <h1 className='title'>Pemilik Kost</h1>
        <h2 className='subtitle'>List of Pemilik Kost</h2>
        <Link to="/users/add" className="btn btn-primary">Add New</Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {pemilik.map((pemilik, index)=>(
                <tr key={pemilik.uuid}>
                    <td>{index+1}</td>
                    <td>{pemilik.name}</td>
                    <td>{pemilik.email}</td>
                    <td>{pemilik.role}</td>
                    <td>
                    <Link to={`/users/edit/${pemilik.uuid}`}className='btn btn-warning' >Edit</Link>
                        <button onClick={()=> deletePemilik(pemilik.uuid)} className='btn btn-danger' >Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Pemiliklist