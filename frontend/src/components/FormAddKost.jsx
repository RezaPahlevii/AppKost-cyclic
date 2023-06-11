import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddKost = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveKost = async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/rumah-kost", {
        name: name,
        price: price
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
      <h2 className="subtitle">Add New Kost</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveKost}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholer="Nama Kost"
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
                    onChange={(e)=> setPrice(e.target.value)}
                    placeholer="Harga"
                  />
                </div>
              </div>
              <form>
                <div className="field">
                  <div className="control">
                    <button type="submit" onClick={saveKost} className="button is-success">
                      Save
                    </button>
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

export default FormAddKost;
