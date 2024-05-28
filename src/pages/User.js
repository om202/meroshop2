import React from 'react';
import { GlobalStateContext } from '../State';
import { useNavigate } from 'react-router-dom';


export const User = () => {
  const [state, setState] = React.useContext(GlobalStateContext);
  const navigate = useNavigate();
  const setUser = (user) => {
    setState((state) => ({ ...state, user }));
    localStorage.removeItem('user');
    navigate('/');
  };
  const { user } = state;
  return (
    <div class="pt-20 h-full flex flex-col gap-8">
      <span className='text-xl'>{user}</span>
      <button onClick={() => {setUser(null)}} class="bg-red-500 text-white rounded px-2 py-1">
        Logout
      </button>
    </div>
  )
};