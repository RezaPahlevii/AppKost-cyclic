import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const RumahKostlist = () => {
    const [kosts, setKosts] = useState ([]);

    useEffect(()=>{
        getKosts();
    }, []);

    const getKosts = async ()=>{
        const response = await axios.get("http://localhost:5000/rumah-kost");
        setKosts(response.data);
    };

    const deleteKost = async(kostId) =>{
        await axios.delete(`http://localhost:5000/rumah-kost/${kostId}`);
        getKosts();
    };

  return (
    <div>
        <h1 className='title'>Rumah Kost</h1>
        <h2 className='subtitle'>List of Rumah Kost</h2>
        <Link to="/rumah-kost/add" className="btn btn-primary">Add New</Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Kost</th>
                    <th>Harga</th>
                    <th>Nama Pemilik</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {kosts.map((kost, index)=>(
                <tr key={kosts.uuid}>
                    <td>{index + 1}</td>
                    <td>{kost.name}</td>
                    <td>{kost.price}</td>
                    <td>{kost.user.name}</td>
                    <td>
                        <Link to={`/rumah-kost/edit/${kost.uuid}`}className='btn btn-warning' >Edit</Link>
                        <button onClick={()=> deleteKost(kost.uuid)} className='btn btn-danger' >Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default RumahKostlist