import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

export const Dashboard = () => {
    const [balance,setBalance] = useState('');
    const checkBalance = async()=>{
        const response = await axios.get("http://localhost:4000/api/v1/account/balance",{
            headers:{
                Authorization : "Bearer " + localStorage.getItem("token"),
            }
        })
        console.log("reponse",response);
        setBalance(response.data.balance);
    }
    useEffect( ()=>{
        checkBalance()
    })
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}