import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditKost = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  // tampilkan data form edit sesuai record database
  useEffect(()=>{
    const getKostById = async()=>{
        try {
            const response = await axios.get(`http://localhost:5000/rumah-kost/${id}`);
            setName(response.data.name);
            setPrice(response.data.price);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
              }
        }
    };
    getKostById();
  }, [id]);

  const updateKost = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/rumah-kost/${id}`, {
        name: name,
        price: price,
      });
      navigate("/rumah-kost");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Rumah Kost</h1>
      <h2 className="subtitle">Update Kost</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateKost}>
                <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholer="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Harga</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholer="Harga"
                  />
                </div>
              </div>

              <form>
                <div className="field">
                  <div className="control">
                    <button onClick={updateKost} type="submit" className="button is-success">Update</button>
                  </div>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditKost;
