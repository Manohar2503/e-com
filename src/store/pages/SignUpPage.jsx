import React,{useState} from 'react'

const SignUpPage = () => {
  const [data,setData]=useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:''
  })
  const {username,email,password,confirmpassword}=data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
}
const submitHandler=e=>{
  e.preventDefault()
  if(password==confirmpassword){
    console.log(data)
  }
  else{
    console.log("passwords are not matching")
  }
  
}
  return (
   
    <div className="sign-up">
      <div className="sign-up-form">
        <center>
        <div>
            <h2>Signup form</h2>
        </div>
          <form onSubmit={submitHandler}>
            <lable>Username: </lable>
          <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
          <label>email: </label>
          <input type="email" name="email" value={email} onChange={changeHandler} /><br/>
          <label>Password: </label>
          <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
          <label>confirmpassword: </label>
          <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br/>
          <input type="submit" name="submit"/>
          </form>
        </center>
      </div>
    </div>
  )
}

export default SignUpPage