import React, {useEffect} from 'react'
import Layout from './Layout'
import FormEditPemilik from '../components/FormEditPemilik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const EditPemilik = () => {
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
        <FormEditPemilik/>
    </Layout>
  )
}

export default EditPemilik