import React, { useState } from 'react'
import Textfield from '../../components/Textfield'
import Buttons from '../../components/Buttons'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

const EditUser = () => {
    const navigate = useNavigate()

    const handleEditUser = ()=>{
        setValues({name:'', email: ''})
        navigate('/')
    }
    const params = useParams();
    const users = useSelector(store => store.users)
    const existingUser = users.filter(user => user.id === params.id)
    //Here we got the name and email from existingUser id made possible by useParams and uuid
    const{name, email} = existingUser[0]
    //here the name and email in useState is destructured from existingUser
    const[values, setValues] = useState({
        name,
        email
    })
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
         value ={values.email}
         onChange = {(e)=>setValues({...values, email: e.target.value})}
         inputProps= {{type:'text', placeholder : 'Input email'}}
         />
         <Buttons onClick= {handleEditUser}> Edit </Buttons>
        </div>
  )
}

export default EditUser