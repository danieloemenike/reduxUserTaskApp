import React from 'react'
import Buttons from '../../components/Buttons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../app/store';
import { deleteUser } from './UserSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users)
    const removeUser = (id)=>{
      dispatch(deleteUser({id }))
    }
  const renderCard = () => users.map((user) =>(
    <div className = 'bg-gray-300 p-5 flex items-center justify-between' key={user.id}>
  
      <div><h1  className = "font-bold text-lg text-gray-700">{user.name}</h1>
        <span className = "font-normal text-gray-600"> {user.email} </span>
       </div>
      
      <div className="flex gap-4"> 
    <Link to={`edit-user/${user.id}`}>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>

        </button>
        </Link>
        <button onClick= {() => removeUser(user.id)}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>

        </button>
      </div>
    </div>
  ))
  
  return (
    <div> 
      
      <Link to='/add-user'><Buttons> Add User </Buttons></Link>
    <div className= 'grid gap-5 md:grid-cols-2 p-5'>
 
      {users.length ? renderCard() : <p className = 'text-center col-span-2 text-gray-700 font-semibold'> No User Found!</p>}
    </div>
    </div>
  )
}

export default UserList
