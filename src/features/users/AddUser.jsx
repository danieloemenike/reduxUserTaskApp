import React, { useState } from 'react'
import Textfield from '../../components/Textfield'
import Buttons from '../../components/Buttons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from './UserSlice'
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const dispatch =  useDispatch();
    const navigate = useNavigate()
    const[values, setValues] = useState({
        name: '',
        email: ' '
    })
    const handleAddUser = ()=>{
        setValues({name:'',email: ''})
        dispatch(addUser({
            id: uuidv4(),
            name : values.name,
            email: values.email
        }))
        navigate('/')
    }
  return (
    <div className= "mt-10 max-w-xl mx-auto">
     <Textfield 
     label = "Name"
     onChange = {(e)=>setValues({...values, name:e.target.value})}
     value = {values.name}
     inputProps= {{type:'text', placeholder : 'Input Name'}}
     />
       <Textfield 
     label = "Email"
     values={values.email}
     onChange = {(e)=>setValues({...values, email:e.target.value})}
     inputProps= {{type:'email', placeholder : 'Input email'}}
     />
     <Buttons onClick= {handleAddUser}>Submit </Buttons>
    </div>
  )
}

export default AddUser