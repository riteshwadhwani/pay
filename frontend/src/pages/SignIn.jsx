import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import {toast} from 'react-hot-toast'

export const SignIn = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
    const onClick = async() =>{
      const response = await axios.post('http://localhost:4000/api/v1/user/signin',{
        email,password
      });
      console.log("response",response);
      localStorage.setItem("token",response.data.token);
      toast.success("Log In Sucessfully....")
      navigate('/dashboard');
    }
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Link to={'/'} className="flex mx-auto flex-col justify-center h-fit w-fit  p-4 bg-gradient-to-r from-purple-400 to-pink-500 font-bold text-white rounded-xl">
            PayKro 
        </Link>
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={(e)=>{setEmail(e.target.value)}} placeholder="ritesh@gmail.com" label={"Email"} />
        <InputBox onChange={(e)=>setPassword(e.target.value)} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={onClick} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}