import React, {useEffect} from 'react'
import RumahKostlist from '../components/RumahKostlist'
import Layout from './Layout'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const RumahKost = () => {
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
    <RumahKostlist/>
  </Layout>
  )
}

export default RumahKost