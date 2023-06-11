import React,{useEffect} from 'react'
import Layout from './Layout'
import FormAddKost from './../components/FormAddKost';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const AddRumahKost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);
  
  useEffect(()=>{
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
        <FormAddKost/>
    </Layout>
  )
}

export default AddRumahKost;