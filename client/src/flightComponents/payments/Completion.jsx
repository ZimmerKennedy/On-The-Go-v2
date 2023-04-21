import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Completion = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
    <h1 className='font-roboto text-4xl'>Thank you! 🎉 A Confirmation Email has been Sent, You are now being Redirected</h1>
    </div>
  )
}

export default Completion