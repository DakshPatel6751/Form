import React, { useState } from 'react'


const Form= () => {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [city,setcity]=useState('')
  const [gender,setgender]=useState('')


const handleClick =(e)=>{
  e.preventDefault();
  const obj={
    name:name,
    email:email,
    password:password,
    city:city,
    gender:gender
  }
  localStorage.setItem('employee',JSON.stringify(obj))
  console.log(obj);
  setname('');
  setemail('');
  setpassword('');
  setcity('');
  setgender('');


}






  return (
    <>
    <h1 style={{width:'500px',height:'70px',backgroundColor:'black',color:'white'}}>
      Form
    </h1>
    <form  style={{width:'500px',height:'300px',backgroundColor:'gray'}}action="" onSubmit={handleClick}>
      <input style={{width:'300px',height:'30px',marginTop:'20px',backgroundColor:'lightblue'}} type="text" placeholder='enter your name ' value={name} onChange={(e)=>setname(e.target.value)}/><br />
      <input style={{width:'300px',height:'30px',marginTop:'20px',backgroundColor:'lightblue'}} type="email" placeholder='enter your email' value={email} onChange={(e)=>setemail(e.target.value)}/><br />
      <input style={{width:'300px',height:'30px',marginTop:'20px',backgroundColor:'lightblue'}} type="password" placeholder='enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br />
      <select style={{width:'250px',height:'30px',marginTop:'20px',backgroundColor:'lightblue'}} name="" id=""  onChange={(e)=>setcity(e.target.value)}>
        <option value="">city</option>
        <option value="delhi">delhi</option>
        <option value="surat">surat</option>
        <option value="mumbai">mumbai</option>
        <option value="mumbai">mahesana</option>
      </select><br />
      male <input style={{marginTop:'20px'}} type="radio" value={"male"} name="gender"   onChange={(e)=>{setgender(e.target.value)}}/>
      female <input style={{marginTop:'20px'}} type="radio" value={"female"} name="gender"  onChange={(e)=>{setgender(e.target.value)}} /> <br />
      
 

      <input style={{marginTop:'20px'}}type="submit" value="submit"/>


    </form>



    </>




  )



}

export default Form