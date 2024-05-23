import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const SinginPage = () => {
    const [data,setData]=useState({
        username:'',
        password:''
    })
    const {username,password}=data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler=e=>{
        e.preventDefault()
        console.log(data)
    }
  return (
    <div className="signin-container">
        
        <div className="design">
        <center>
        <div>
            <h2>Signin form</h2>
        </div>
            <form className="signin-form" onSubmit={submitHandler}>
                <label className="Menuu">E-mail:  </label>
                <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
                <lable className="Menuu">password: </lable>
                <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
                <input type="submit" name="submit"/>
                <div className="forgotten">
                <h4 className="forgot">forgot</h4>
                </div>
                <div className="signup">
                    <Link to='/signup'>
                    <h4 className="upPage">SignUp</h4></Link>
                </div>

            </form>
        </center>
    </div>
    </div>
  )
}

export default SinginPage