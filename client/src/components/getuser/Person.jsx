import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./user.css"
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
const Person = () => {
    const[users,setusers]=useState([]);
   
    
    useEffect(()=>{
        const fetechData = async()=>{
            const response=await axios.get("http://localhost:8080/api/getall")
            setusers(response.data);
        }
        fetechData();
    },[])
    const deleteUser = async(userId)=>{
        await axios.delete(`http://localhost:8080/api/delete/${userId}`)
        .then((response)=>{
            setusers((prevUsers)=>prevUsers.filter((user)=>user._id !==userId))
             toast.success(response.data.msg,{position:"top-right"})
        })
        .catch((error)=>{
            console.log(error);
        })

    }
  return (
<div className='userTable'>
    <Link to={"/add"} className='addButton'>Add user</Link>
    <table   border={1} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>S.No</th>
                <th>User name</th>
                <th>User Email</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            {
                users.map((users,index)=>{
                    return (
            <tr key={users._id}>
                <td>{index+1}</td>
                <td>{users.fname} {users.lname}</td>
                <td>{users.email}</td>
                <td className='actionButtons'>
                    <button onClick={()=>deleteUser(users._id)}><i className="fa-solid fa-trash"></i></button>
                    <Link to={`/edit/`+ users._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                </td>
            </tr>)

                })
            }
           
        </tbody>
    </table>
</div>
        

  )
}

export default Person