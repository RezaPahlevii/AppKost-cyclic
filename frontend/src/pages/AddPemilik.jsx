import React, {useEffect} from 'react'
import FormAddPemilik from '../components/FormAddPemilik'
import Layout from './Layout'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const AddPemilik = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError, pemilik} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);
  
  useEffect(()=>{
    if(isError){
      navigate("/");
    }
    if(pemilik && pemilik.role !== "admin"){
      navigate("/dashboard");
    }
  }, [isError, navigate]);

  return (
 <Layout>
    <FormAddPemilik/>
 </Layout>
  )
}

export default AddPemilik